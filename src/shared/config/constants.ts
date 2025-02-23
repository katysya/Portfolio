export const AnimationCard = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const AnimationTitle = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
    filter: 'blur(5px)',
    rotate: -5,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    rotate: 0,
    transition: {
      duration: 2,
      ease: 'easeOut',
      delay: 0.2,
      type: 'spring',
      stiffness: 50,
    },
  },
};
