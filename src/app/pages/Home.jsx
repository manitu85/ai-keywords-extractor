import { Flex } from '@chakra-ui/react';

import Feature from '@/components/Elements/Feature';
import { MotionRouteTransition } from '@/components/Motion';
import MotionBox from '@/components/Motion/MotionBox';
import { routeProps } from '@/theme/motion/motion.variants';
import { FEATURE } from '@/utils';

export default function Home() {
  return (
    <>
      <MotionBox {...routeProps}>
        <Flex justify='center' align='center'>
          <Feature title={FEATURE.title} sub={FEATURE.subtitle} desc={FEATURE.desc} />
        </Flex>
      </MotionBox>
      <MotionRouteTransition />
    </>
  );
}
