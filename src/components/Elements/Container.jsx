import { Flex } from '@chakra-ui/react';

const MainContainer = ({ children }) => {
  return (
    <Flex as='main' justify='center' direction='column' minH='calc(100vh - 12.25rem)' mx='auto'>
      {children}
    </Flex>
  );
};

export default MainContainer;
