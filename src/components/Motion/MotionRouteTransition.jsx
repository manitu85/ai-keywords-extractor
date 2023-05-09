import { useIsPresent } from 'framer-motion';

import { HomePageRouteTransition } from '@/theme/motion/motion.variants';

import MotionBox from './MotionBox';

export const MotionRouteTransition = () => {
  const isPresent = useIsPresent();
  return (
    <MotionBox
      initial='hidden'
      animate='visible'
      exit='exit'
      style={{ originX: isPresent ? 0 : 1 }}
      variants={HomePageRouteTransition}
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
