import { Flex } from '@chakra-ui/react';

const MainContainer = ({ children }) => {
  return (
    <Flex
      as='main'
      justify='center'
      direction='column'
      minH='calc(100vh - 12.1rem)' // ~ header + footer height
      mx='auto'
      width='full'
    >
      {children}
    </Flex>
  );
};

export default MainContainer;
