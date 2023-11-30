const sentence = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    margin: -10,
  },
  visible: {
    opacity: 1,
    margin: 0,
  },
};

export { sentence, letter };
