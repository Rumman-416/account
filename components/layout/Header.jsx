import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./Button";

const Header = () => {
  const router = useRouter();
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sideBar, setSideBar] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsTop(currentScrollY < 50);

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (sideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [sideBar]);

  const nav = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-us" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact-us" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Main Header */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isScrolledDown ? -120 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isTop
            ? "py-4 lg:py-[0.5vw]"
            : "py-3 lg:py-[0.35vw]"
        }`}
      >
        <div
          className={`mx-auto w-[92%] lg:w-[88%] flex items-center justify-between
            rounded-full transition-all duration-500
            ${
              isTop
                ? "bg-transparent backdrop-blur-none"
                : "bg-dark-900/80 backdrop-blur-xl border border-white/[0.06]"
            }
            px-5 py-3 lg:px-[1.5vw] lg:py-[0.5vw]
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 lg:gap-[0.6vw]">
            <div className="w-8 h-8 lg:w-[2.2vw] lg:h-[2.2vw] bg-brand-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm lg:text-[1vw]">S</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-semibold text-sm lg:text-[1vw] leading-tight">
                Samim
              </p>
              <p className="text-white/50 text-[9px] lg:text-[0.6vw] font-light uppercase tracking-[0.2em]">
                Consultancy
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-[2.5vw]">
            {nav.map((item) => (
              <Link key={item.link} href={item.link}>
                <span
                  className={`relative text-sm lg:text-[0.85vw] font-light tracking-wide transition-colors duration-300
                    ${router.pathname === item.link ? "text-brand-500" : "text-white/70 hover:text-white"}
                  `}
                >
                  {item.name}
                  {router.pathname === item.link && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-500 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Link href="/contact-us">
                <Button text="Get in Touch" />
              </Link>
            </div>
            <button
              onClick={() => setSideBar(true)}
              className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
              aria-label="Open menu"
            >
              <span className="w-5 h-[1.5px] bg-white transition-all" />
              <span className="w-3.5 h-[1.5px] bg-white transition-all" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sideBar && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSideBar(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
              className="fixed top-0 right-0 z-[70] h-full w-[75%] max-w-[320px] bg-dark-900/95 backdrop-blur-2xl border-l border-white/[0.06]"
            >
              <div className="flex flex-col h-full p-8">
                {/* Close */}
                <button
                  onClick={() => setSideBar(false)}
                  className="self-end w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-brand-500 transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M1 13L13 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>

                {/* Nav Links */}
                <motion.nav
                  className="mt-16 flex flex-col gap-8"
                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
                >
                  {nav.map((item, index) => (
                    <motion.div key={item.link} variants={itemVariants}>
                      <Link
                        href={item.link}
                        onClick={() => setSideBar(false)}
                        className={`block text-2xl font-light tracking-wide transition-colors ${
                          router.pathname === item.link
                            ? "text-brand-500"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>

                {/* Bottom CTA */}
                <div className="mt-auto">
                  <Link href="/contact-us" onClick={() => setSideBar(false)}>
                    <Button text="Get in Touch" className="w-full justify-center" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
