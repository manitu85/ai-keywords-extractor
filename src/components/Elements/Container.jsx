import { Flex } from '@chakra-ui/react';

const MainContainer = ({ children }) => {
  return (
    <Flex as='main' justify='center' direction='column' h='90vh' mx='auto'>
      {children}
    </Flex>
  );
};

export default MainContainer;
