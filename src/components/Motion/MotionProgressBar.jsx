import { useScroll, useSpring } from 'framer-motion';

import MotionBox from './MotionBox';

const MotionProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <MotionBox
      pos='fixed'
      top='0'
      left='0'
      right='0'
      h='5px'
      bg='fg-footer'
      transformOrigin='0%'
      style={{ scaleX }}
    />
  );
};

export default MotionProgressBar;
