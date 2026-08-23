// Premium animation variants for framer-motion

// Fade up with opacity
export const fadeUp = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

// Fade in
export const fadeIn = (delay = 0, duration = 0.8) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: "easeOut",
    },
  },
});

// Slide in from left
export const slideInLeft = (delay = 0, duration = 0.7) => ({
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

// Slide in from right
export const slideInRight = (delay = 0, duration = 0.7) => ({
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

// Scale in
export const scaleIn = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

// Clip reveal (text reveal effect)
export const clipReveal = (delay = 0, duration = 0.8) => ({
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: {
    clipPath: "inset(0 0% 0 0)",
    transition: {
      type: "tween",
      duration,
      delay,
      ease: [0.77, 0, 0.175, 1],
    },
  },
});

// Stagger container
export const staggerContainer = (stagger = 0.1, delay = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

// For backward compatibility with existing components
export const slideIn = (direction, delay = 0) => {
  const variants = {
    hidden: {
      y: direction === "up" ? 500 : direction === "down" ? -500 : 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };
  return variants;
};

// Parallax container variant
export const parallaxFade = (offset = 50) => ({
  hidden: { opacity: 0, y: offset },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});
