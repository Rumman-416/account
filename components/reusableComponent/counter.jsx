import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ start, end, duration, suffix }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let startTimestamp;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        if (elapsed < duration) {
          const progress = elapsed / duration;
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const val = start + (end - start) * eased;
          setCount(end % 1 !== 0 ? parseFloat(val.toFixed(1)) : Math.floor(val));
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(step);
    }
  }, [inView, start, end, duration]);

  return (
    <h6
      ref={ref}
      className="text-center text-2xl md:text-3xl lg:text-[2.2vw] font-bold text-white"
    >
      {inView ? (
        <>
          {count}
          {suffix}
        </>
      ) : (
        <>0{suffix}</>
      )}
    </h6>
  );
};

export default Counter;
