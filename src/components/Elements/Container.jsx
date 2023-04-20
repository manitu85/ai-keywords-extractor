import { Flex } from '@chakra-ui/react';

const Container = ({ children }) => {
  return (
    <Flex as='main' maxW='960px' justify='center' direction='column' w='100%' minHeight='95vh'>
      {children}
    </Flex>
  );
};

export default Container;
