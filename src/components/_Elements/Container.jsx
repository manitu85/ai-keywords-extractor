import { Flex } from '@chakra-ui/react';

const MainContainer = ({ children }) => {
  return (
    <Flex
      as='main'
      direction='column'
      justify='center'
      align='center'
      width='full'
      minH={[
        'calc(100vh - 11.9rem)',
        'calc(100vh - 12rem)',
        'calc(100vh - 12.1rem)',
        'calc(100vh - 13.1rem)'
      ]}
      mx='auto'
      py={0}
    >
      {children}
    </Flex>
  );
};

export default MainContainer;
