import { Flex, Heading, Text } from '@chakra-ui/react';

const headingGradient = 'linear(to-l, #fff, #eefa94)';

export default function Feature({ title, sub, desc, ...rest }) {
  return (
    <Flex p={5} w={750} direction='column' justify='flexStart' {...rest}>
      <Heading as='h1' fontSize='5xl' bgGradient={headingGradient} bgClip='text'>
        {title}
      </Heading>
      <Heading as='h2' fontSize='2xl' bgGradient={headingGradient} bgClip='text'>
        {sub}
      </Heading>
      <Text text='fg-accent' mt={4}>
        {desc}
      </Text>
    </Flex>
  );
}
