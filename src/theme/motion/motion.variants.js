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

export const routeProps = {
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
  variants: routeVariantsContainer
};

export const pageRouteTransition = (durationVisible, durationHidden) => {
  return {
    hidden: {
      scaleX: 1
    },
    visible: {
      scaleX: 0,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: durationVisible, // duration: 0.8,
        ease: 'circOut'
      }
    },
    exit: {
      scaleX: 1,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: durationHidden, // duration: 0.6,
        ease: 'circIn'
      }
    }
  };
};

// Stagger items variants
export const staggerContainer = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
      delayChildren: 0.5
    }
  }
};

export const staggerProps = {
  initial: 'hidden',
  animate: 'visible',
  variants: staggerContainer
};

const easing = [0.175, 0.85, 0.42, 0.96];

export const staggerItems = {
  hidden: {
    opacity: 0,
    y: 200
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.3,
      ease: easing,
      type: 'spring',
      stiffness: 50,
      damping: 10,
      mass: 0.5,
      velocity: 10
    }
  }
};
