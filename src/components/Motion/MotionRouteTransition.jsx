import { useIsPresent } from 'framer-motion';

import { pageRouteTransition } from '@/theme/motion/motion.variants';

import MotionBox from './MotionBox';

const MotionRouteTransition = () => {
  const isPresent = useIsPresent();
  return (
    <MotionBox
      key='transition'
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={pageRouteTransition(0.6, 0.4)}
      style={{ originX: isPresent ? 0 : 1 }}
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

export default MotionRouteTransition;

// useIsPresent(): boolean
// Similar to usePresence, except useIsPresent simply returns whether or not the component is
// present. There is no safeToRemove function.
// https://www.framer.com/motion/animate-presence/#useispresent
