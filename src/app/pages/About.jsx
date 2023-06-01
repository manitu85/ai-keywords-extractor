import { Container, Heading, List, Text } from '@chakra-ui/react';
import { ListItem } from '@Elements';
import Technologies from '@Elements/Technologies';

import { MotionRouteTransition } from '@/components/Motion';
import MotionBox from '@/components/Motion/MotionBox';
import MotionProgressBar from '@/components/Motion/MotionProgressBar';
import { routeProps } from '@/theme/motion/motion.variants';
import { LIST_CASES, LIST_ITEMS } from '@/utils';

const headerResponsiveSizes = ['1.5rem', '1.75rem', '2rem'];

export default function About() {
  return (
    <>
      <MotionProgressBar />
      <MotionBox {...routeProps}>
        <Container maxW='3xl'>
          <Heading as='h2' mb={8} algin='left' fontSize={headerResponsiveSizes}>
            {' '}
            What is a keyword extractor?
          </Heading>
          <Text mb={4}>
            Keyword extraction, also known as keyword detection or keyword analysis, is a text
            analysis technique that automatically extracts the most used and most important words
            and expressions from a text. It helps summarize the content of texts and recognize the
            main topics discussed.
          </Text>
          <Text mb={4}>
            Keyword extraction uses machine learning Artificial Intelligence (AI) with Natural
            Language Processing (NLP) to break down human language so that it can be understood and
            analyzed by machines.
          </Text>
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
          <Heading as='h2' mb={4} algin='left' fontSize={headerResponsiveSizes}>
            Advantages of keyword extraction
          </Heading>
          <Text mb='2rem'>
            Thanks to keyword extraction, organizations are able to automate some of their most
            routine tasks, saving valuable time and resources while analyzing data. Businesses can
            also use keyword extraction to get valuable insights about their products or services
            and use them to make data-driven decisions.
          </Text>
          <Heading as='h3' mb={4} fontSize={headerResponsiveSizes}>
            Scalability
          </Heading>
          <Text mb={6}>
            Automated keyword extraction allows you to analyze as much data as you want. Yes, you
            could read texts and identify key terms manually, but it would be extremely
            time-consuming. Automating this task gives you the freedom to concentrate on other parts
            of your job.
          </Text>
          <Heading as='h3' mb={4} fontSize={headerResponsiveSizes}>
            Consistent criteria
          </Heading>
          <Text mb={6}>
            Keyword extraction acts based on rules and predefined parameters. You don’t have to deal
            with inconsistencies, which are common in manual text analysis.
          </Text>
          <Heading as='h3' mb={4} fontSize={headerResponsiveSizes}>
            Real-time analysis
          </Heading>
          <Text mb={6}>
            You can perform keyword extraction on social media posts, customer reviews, surveys, or
            customer support tickets in real-time, and get insights about what’s being said about
            your product as they happen and follow them over time.
          </Text>
          <Heading as='h2' mb={4} algin='left' fontSize={headerResponsiveSizes}>
            Keyword extraction API use cases
          </Heading>
          <Text mb={6}>
            You can use Keyword extraction in numerous fields. Here are some examples of common use
            cases:
          </Text>
          <List spacing={2} mb='2rem'>
            {LIST_CASES.map(({ id, text }) => (
              <ListItem key={id} title={text} />
            ))}
          </List>
        </Container>
      </MotionBox>
      <MotionRouteTransition />
    </>
  );
}
