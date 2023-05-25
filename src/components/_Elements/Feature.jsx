import { Box, Container, Flex, Heading, HStack, Icon, Spacer, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { RiUserStarFill } from 'react-icons/ri';
import { VscSymbolKeyword } from 'react-icons/vsc';

import { staggerItems, staggerProps } from '@/theme/motion/motion.variants';

import { MotionBox } from '../Motion';

export const headingGradient = 'linear(to-r, #ffffb7, #fff192,#ffea61 ,#FFFF00,#FFD700)';

function Feature({ title, sub, desc, ...rest }) {
  return (
    <Flex p={[10, 8]} maxW={800} direction='column' justify='flexStart' gap={4} {...rest}>
      <MotionBox {...staggerProps}>
        <Heading
          as={motion.h1}
          variants={staggerItems}
          fontSize={{ base: '4xl', md: '2.75rem' }}
          bgGradient={headingGradient}
          bgClip='text'
          fontFamily='"Open Sans"'
        >
          {title}
        </Heading>
        <Heading
          as={motion.h2}
          variants={staggerItems}
          fontSize={['xl', '2xl']}
          bgGradient={headingGradient}
          bgClip='text'
        >
          {sub}
        </Heading>
      </MotionBox>
      <Text text='fg-accent' mt={4} fontSize={['sm', 'sm', 'md']}>
        {desc}
      </Text>
      <Flex justify='flex-start' gap={[4, 8, 16]} mt={2}>
        <HStack spacing={2}>
          <Icon as={RiUserStarFill} boxSize={6} color='current' />
          <Text
            color='fg-muted'
            mt={4}
            fontSize={['0.65em', '0.75em', '0.85em']}
            fontWeight='bold'
            textTransform='uppercase'
            fontFamily='"Open Sans"'
          >
            <span>
              {' '}
              active daily <CountUp
                prefix='~ '
                start={73}
                end={12_345}
                duration={3}
                delay={0.5}
              />{' '}
              users{' '}
            </span>
          </Text>
        </HStack>
        <Spacer />
        <HStack spacing={2}>
          <Icon as={VscSymbolKeyword} boxSize={6} color='current' />
          <Text
            color='fg-muted'
            mt={4}
            fontSize={['0.65em', '0.75em', '0.85em']}
            fontWeight='bold'
            textTransform='uppercase'
            fontFamily='"Open Sans"'
          >
            <span>
              {' '}
              ai extracted{' '}
              <CountUp prefix='~ ' start={3562} end={1_235_079_120} duration={6} delay={0.5} />{' '}
              keywords{' '}
            </span>
          </Text>
        </HStack>
      </Flex>
    </Flex>
  );
}

export default Feature;

// Todo: Depart in two components (FeatureCounter)
