const myVariant = {
  initial: {
    opacity: 1,
    scaleX: 0.9,
    scaleY: 0.5,
  },
  whileInView: {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};
const childVariant = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    transition: {
      duration: 0.7,

      type: "spring",
      stiffness: 200,
      mass: 0.5,
      damping: 100,
    },
  },
};

export { myVariant, childVariant };
