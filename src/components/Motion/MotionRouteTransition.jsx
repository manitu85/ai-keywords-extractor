import { useIsPresent } from 'framer-motion';

import { pageRouteTransition } from '@/theme/motion/motion.variants';

import MotionBox from './MotionBox';

export const MotionRouteTransition = () => {
  const isPresent = useIsPresent();
  return (
    <MotionBox
      key='transition'
      initial='hidden'
      animate='visible'
      exit='exit'
      style={{ originX: isPresent ? 0 : 1 }}
      variants={pageRouteTransition(0.6, 0.4)}
      pos='fixed'
      top='0'
      left='0'
      bottom='0'
      right='0'
      bg='bg-transition'
      zIndex={2}
    />
  );
};

// useIsPresent(): boolean
// Similar to usePresence, except useIsPresent simply returns whether or not the component is
// present. There is no safeToRemove function.
// https://www.framer.com/motion/animate-presence/#useispresent
