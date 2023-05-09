import { Container, Heading } from '@chakra-ui/react';

import MotionBox from '@/components/Motion/MotionBox';
import { MotionRouteTransition } from '@/components/Motion/MotionRouteTransition';
import { motionProps } from '@/theme/motion/motion.variants';

export default function ExtractKeywords() {
  return (
    <>
      <MotionBox {...motionProps}>
        <Container maxW='3xl' centerContent>
          <Heading as='h3' color='white'>
            Extract Keywords
          </Heading>
        </Container>
      </MotionBox>
      <MotionRouteTransition />
    </>
  );
}
