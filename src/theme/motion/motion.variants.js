export const sectionVariants = {
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
      delay: 0.5,
      duration: 0.2
    }
  }
};

export const HomePageRouteTransition = {
  hidden: {
    scaleX: 1
  },
  visible: {
    scaleX: 0,
    transition: {
      duration: 0.8,
      ease: 'circOut'
    }
  },
  exit: {
    scaleX: 1,
    transition: {
      duration: 0.6,
      ease: 'circIn'
    }
  }
};

export const motionProps = {
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
  variants: sectionVariants
};
