import { Container, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';

import { headingGradient } from './Feature';

const PageHeading = ({ title, description }) => (
  <Stack spacing={4} as={Container} maxW='3xl' textAlign='center' py={0} mt={-8}>
    <Heading
      fontSize={{ base: '2xl', sm: '4xl', md: '2.5rem' }}
      fontWeight='bold'
      fontFamily='Open Sans'
      bgGradient={headingGradient}
      bgClip='text'
    >
      {title}
    </Heading>
    <HStack align='center' justify='center'>
      <Image src='/src/assets/openai.svg' w='1.5rem' h='1.5rem' />
      <Text fontWeight='medium'>Powered by Open AI</Text>
    </HStack>
    <Text color='fg-default' fontSize={{ base: 'sm', sm: 'lg' }}>
      {description}
    </Text>
  </Stack>
);

export default PageHeading;
