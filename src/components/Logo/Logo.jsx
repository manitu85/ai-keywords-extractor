import { Flex, Image, Text } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

export default function Logo(props) {
  return (
    <Flex align='center' {...props}>
      <RouteLink to='/'>
        <Image src='src/assets/bulb-idea.svg' w='40px' h='40px' mr={2} />
      </RouteLink>
      <Text
        fontSize='xl'
        fontWeight='bold'
        color='fg-accent'
        textTransform='uppercase'
        letterSpacing='widest'
      >
        aikye
      </Text>
    </Flex>
  );
}
