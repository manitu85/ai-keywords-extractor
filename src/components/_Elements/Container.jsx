import { Flex } from '@chakra-ui/react';

const MainContainer = ({ children }) => {
  return (
    <Flex
      as='main'
      direction='column'
      justify='center'
      align='center'
      minH={[
        'calc(100vh - 11.9rem)',
        'calc(100vh - 12rem)',
        'calc(100vh - 12.1rem)',
        'calc(100vh - 13.1rem)'
      ]}
      mx='auto'
      width='full'
    >
      {children}
    </Flex>
  );
};

export default MainContainer;
