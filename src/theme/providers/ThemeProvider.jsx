import { ChakraProvider } from '@chakra-ui/react';

import customTheme from '..';

const ThemeProvider = ({ children }) => {
  return (
    <ChakraProvider
      theme={customTheme}
      toastOptions={{ defaultOptions: { position: 'top-right', duration: 5000, isClosable: true } }}
    >
      {children}
    </ChakraProvider>
  );
};

export default ThemeProvider;
