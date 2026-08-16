export const fadeIn = (direction, delay = 0) => ({
  hidden: {
    y: direction === "up" ? 24 : direction === "down" ? -24 : 0,
    opacity: 0,
    x: direction === "left" ? 24 : direction === "right" ? -24 : 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.55,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});
