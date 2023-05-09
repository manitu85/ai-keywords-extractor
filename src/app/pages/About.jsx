import { Container, Heading, List, Text } from '@chakra-ui/react';
import { ListItem } from '@Elements';

import MotionBox from '@/components/Motion/MotionBox';
import { MotionRouteTransition } from '@/components/Motion/MotionRouteTransition';
import { LIST_ITEMS } from '@/config';
import { motionProps } from '@/theme/motion/motion.variants';

export default function About() {
  return (
    <>
      <MotionBox {...motionProps}>
        <Container maxW='3xl'>
          <Heading as='h2' mb={8} algin='left'>
            {' '}
            What is a keyword extractor?
          </Heading>
          <Text mb={6}>
            Keyword Extractor is an AI-powered keyword tool that can analyze any text and extract
            the most relevant keywords for you. It uses artificial intelligence to understand the
            context and meaning of your text and identify the keywords that best represent it. Some
            possible purposes of keyword extraction are:
          </Text>
          <List spacing={2} mb='4rem'>
            {LIST_ITEMS.map(({ id, text }) => (
              <ListItem key={id} title={text} />
            ))}
          </List>
          <Text mb={6}>
            Keyword Extractor is an AI-powered keyword tool that can analyze any text and extract
            the most relevant keywords for you. It uses artificial intelligence to understand the
            context and meaning of your text and identify the keywords that best represent it. Some
            possible purposes of keyword extraction are:
          </Text>
          <Text mb={6}>
            Keyword Extractor is an AI-powered keyword tool that can analyze any text and extract
            the most relevant keywords for you. It uses artificial intelligence to understand the
            context and meaning of your text and identify the keywords that best represent it. Some
            possible purposes of keyword extraction are:
          </Text>
          <Text mb={6}>
            Keyword Extractor is an AI-powered keyword tool that can analyze any text and extract
            the most relevant keywords for you. It uses artificial intelligence to understand the
            context and meaning of your text and identify the keywords that best represent it. Some
            possible purposes of keyword extraction are:
          </Text>
        </Container>
      </MotionBox>
      <MotionRouteTransition />
    </>
  );
}
