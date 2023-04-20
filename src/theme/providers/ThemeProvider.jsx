import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import customTheme from '..';
import GlobalStyle from './GlobalStyles';

const ThemeProvider = ({ children }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <GlobalStyle />
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
};

export default ThemeProvider;
