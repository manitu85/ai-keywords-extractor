import { Container, Flex, Icon } from '@chakra-ui/react';
import { Card, PageHeading } from '@Elements';
import Technologies from '@Elements/Technologies';

import { MotionBox, MotionProgressBar, MotionRouteTransition } from '@/components/Motion';
import { routeProps } from '@/theme/motion/motion.variants';
import { AI_PROMPTS } from '@/utils';

export default function AiSeoApps() {
  return (
    <>
      <MotionProgressBar />
      <MotionBox {...routeProps}>
        <PageHeading
          title='Boost your SEO power, creativity & productivity'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.'
        />
        <Container maxW='5xl' mt={{ base: '-0.75rem', md: '-3.5rem' }}>
          <Flex flexWrap='wrap' gridGap={6} justify='center'>
            {AI_PROMPTS.map(({ id, icon, title, description, route }) => (
              <Card
                key={id}
                title={title}
                icon={<Icon as={icon} w={10} h={10} color='bg-icon' />}
                description={description}
                route={route}
              />
            ))}
          </Flex>
        </Container>
        <Technologies />
      </MotionBox>
      <MotionRouteTransition />
    </>
  );
}
