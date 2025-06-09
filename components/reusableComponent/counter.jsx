import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ start, end, duration, suffix }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      let startTimestamp;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        if (elapsed < duration) {
          const progress = elapsed / duration;
          setCount(Math.floor(start + (end - start) * progress));
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(step);
    }
  }, [inView, start, end, duration]);

  return (
    <p className="text-center heading" ref={ref}>
      {inView ? (
        <>
          {count} {suffix}
        </>
      ) : (
        <>0</>
      )}
    </p>
  );
};

export default Counter;
