import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// "4.5" should count 0.0 -> 4.5 and "12" should count 0 -> 12, so the rendered
// width never jumps mid-animation.
const decimalsOf = (value) => {
  const decimals = String(value).split(".")[1];
  return decimals ? decimals.length : 0;
};

// Truncate rather than round, so the number keeps climbing until the very end.
// Rounding would display the final value at ~65% of the run and then sit still.
const format = (value, decimals) => {
  const factor = 10 ** decimals;
  return (Math.floor(value * factor) / factor).toFixed(decimals);
};

const Counter = ({ start = 0, end, duration = 1800, suffix = "" }) => {
  const from = Number(start);
  const to = Number(end);
  const decimals = decimalsOf(end);

  const [count, setCount] = useState(from);
  const [ref, inView] = useInView({
    triggerOnce: true,
    // The default threshold of 0 fired while the stats were still a sliver at
    // the bottom of the screen, so the count was finishing roughly 1000px
    // after the row had scrolled past - it looked like it never ran. Wait
    // until the number is genuinely on screen before starting.
    threshold: 0.5,
    rootMargin: "0px 0px -12% 0px",
  });

  useEffect(() => {
    if (!inView) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(to);
      return;
    }

    let frame;
    let startTs;

    const step = (timestamp) => {
      if (startTs === undefined) startTs = timestamp;
      const progress = Math.min(1, (timestamp - startTs) / duration);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(from + (to - from) * eased);
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);

    // Without this the loop outlives the component, and StrictMode's double
    // effect leaves two loops racing each other on the same state.
    return () => cancelAnimationFrame(frame);
  }, [inView, from, to, duration]);

  return (
    <h6
      ref={ref}
      className="text-center text-2xl md:text-3xl lg:text-[2.2vw] font-bold text-white"
    >
      {format(count, decimals)}
      {suffix}
    </h6>
  );
};

export default Counter;
