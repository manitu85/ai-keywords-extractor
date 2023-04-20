import { extendTheme } from '@chakra-ui/react';

import { breakpoints, colors, fonts } from './base';
import { Button, Card, Container, Heading } from './components';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const overrides = {
  components: {
    Card,
    Container,
    Heading,
    Button
  },
  fonts,
  colors,
  breakpoints,
  config
};

const customTheme = extendTheme(overrides);

export default customTheme;
