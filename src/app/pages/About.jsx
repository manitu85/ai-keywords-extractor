import { Container, Heading, List, Text } from '@chakra-ui/react';
import { ListItem } from '@Elements';
import Technologies from '@Elements/Technologies';

import MotionBox from '@/components/Motion/MotionBox';
import { MotionRouteTransition } from '@/components/Motion/MotionRouteTransition';
import { LIST_ITEMS } from '@/config';
import { motionProps } from '@/theme/motion/motion.variants';

export default function About() {
  return (
    <>
      <MotionBox {...motionProps}>
        <Container maxW='3xl'>
          <Heading as='h2' mb={8} algin='left' fontSize='2rem'>
            {' '}
            What is a keyword extractor?
          </Heading>
          <Text mb={6}>
            Keyword Extractor is an AI-powered keyword tool that can analyze any text and extract
            the most relevant keywords for you. It uses artificial intelligence to understand the
            context and meaning of your text and identify the keywords that best represent it. Some
            possible purposes of keyword extraction are:
          </Text>
          <List spacing={2} mb='2rem'>
            {LIST_ITEMS.map(({ id, text }) => (
              <ListItem key={id} title={text} />
            ))}
          </List>
          <Heading as='h2' mb={4} algin='left' fontSize='2rem'>
            Advantages of Keyword Extraction
          </Heading>
          <Text mb='2rem'>
            Thanks to keyword extraction, organisations are able to automate some of their most
            routine tasks, saving valuable time and resources while analyzing data. Businesses can
            also use keyword extraction to get valuable insights about their products or services
            and use them to make data-driven decisions.
          </Text>
          <Heading as='h3' mb={4} fontSize='1.5rem'>
            Scalability
          </Heading>
          <Text mb={6}>
            Automated keyword extraction allows you to analyze as much data as you want. Yes, you
            could read texts and identify key terms manually, but it would be extremely
            time-consuming. Automating this task gives you the freedom to concentrate on other parts
            of your job.
          </Text>
          <Heading as='h3' mb={4} fontSize='1.5rem'>
            Consistent criteria
          </Heading>
          <Text mb={6}>
            Keyword extraction acts based on rules and predefined parameters. You don’t have to deal
            with inconsistencies, which are common in manual text analysis.
          </Text>
          <Heading as='h3' mb={4} fontSize='1.5rem'>
            Real-time analysis
          </Heading>
          <Text mb={6}>
            You can perform keyword extraction on social media posts, customer reviews, surveys, or
            customer support tickets in real-time, and get insights about what’s being said about
            your product as they happen and follow them over time.
          </Text>
          <Technologies />
        </Container>
      </MotionBox>
      <MotionRouteTransition />
    </>
  );
}
