import { ChakraProvider } from '@chakra-ui/react';

import customTheme from '..';

const ThemeProvider = ({ children }) => {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
