export const routeVariantsContainer = {
  hidden: {
    scale: 0.6,
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 0.3
    }
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay: 0.5,
      duration: 0.25,
      ease: 'easeOut'
    }
  }
};

export const motionProps = {
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
  variants: routeVariantsContainer
};

export const pageRouteTransition = (durationV, durationH) => {
  return {
    hidden: {
      scaleX: 1
    },
    visible: {
      scaleX: 0,
      transition: {
        type: 'spring',
        bounce: 0.25,
        duration: durationV, // duration: 0.8,
        ease: 'circOut'
      }
    },
    exit: {
      scaleX: 1,
      transition: {
        type: 'spring',
        bounce: 0.25,
        duration: durationH, // duration: 0.6,
        ease: 'circIn'
      }
    }
  };
};
