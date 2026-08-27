import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Lenis from "@studio-freight/lenis";

const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

// Reference counted so overlapping locks (mobile menu -> contact modal) can't
// release each other. Only the first lock stops scrolling and only the last
// unlock resumes it.
let lockCount = 0;

export function useScrollLock(locked) {
  const lenis = useLenis();

  useEffect(() => {
    if (!locked) return;

    lockCount += 1;
    if (lockCount === 1) {
      // Lenis scrolls the window, not the body, so body overflow does nothing
      // here. Reduced-motion visitors have no Lenis, so lock the body instead.
      if (lenis) lenis.stop();
      else document.body.style.overflow = "hidden";
    }

    return () => {
      lockCount -= 1;
      if (lockCount === 0) {
        if (lenis) lenis.start();
        else document.body.style.overflow = "";
      }
    };
  }, [locked, lenis]);
}

export default function SmoothScroll({ children }) {
  const router = useRouter();
  const lenisRef = useRef(null);
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    // Hijacked scrolling is a motion-sickness trigger, so leave native
    // scrolling alone for anyone who has asked for reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const instance = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.6,
    });

    lenisRef.current = instance;
    setLenis(instance);

    let rafId = requestAnimationFrame(function raf(time) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      // Without this the loop outlives the instance. Under StrictMode the
      // effect runs twice, so two loops end up stepping Lenis every frame
      // and the page scrolls at double speed.
      cancelAnimationFrame(rafId);
      instance.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    if (!lenis) return;

    // Next resets the native scroll position on navigation, but Lenis keeps
    // its own animated value. Left unsynced, the first wheel event after a
    // route change snaps back to wherever the previous page was scrolled to.
    const handleRouteChange = () => {
      lenis.scrollTo(0, { immediate: true, force: true });
      lenis.resize();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [lenis, router.events]);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
