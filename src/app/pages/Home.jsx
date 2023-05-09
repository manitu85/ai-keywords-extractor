import { Flex } from '@chakra-ui/react';

import Feature from '@/components/Elements/Feature';
import MotionBox from '@/components/Motion/MotionBox';
import { MotionRouteTransition } from '@/components/Motion/MotionRouteTransition';
import { FEATURE } from '@/config';
import { motionProps } from '@/theme/motion/motion.variants';

export default function Home() {
  return (
    <>
      <MotionBox {...motionProps}>
        <Flex justify='center' align='center' direction='column'>
          <Feature title={FEATURE.title} sub={FEATURE.subtitle} desc={FEATURE.desc} />
        </Flex>
      </MotionBox>
      <MotionRouteTransition />
    </>
  );
}
