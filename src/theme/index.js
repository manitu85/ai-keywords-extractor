import { extendTheme } from '@chakra-ui/react';

import * as foundations from './base';
import * as components from './components';
import { globalStyles } from './globalStyles';
import { semanticTokens } from './tokens';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  cssVarPrefix: 'aikye'
};

const overrides = {
  config,
  ...globalStyles,
  ...semanticTokens,
  ...foundations,
  components: {
    ...components
  }
};

const customTheme = extendTheme(overrides);

export default customTheme;
