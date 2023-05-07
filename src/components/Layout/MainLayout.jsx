import { Flex, useColorMode } from '@chakra-ui/react';

import MainContainer from '@/components/Elements/Container';
import Meta from '@/components/Seo/Seo';

import Footer from './Footer';
import Header from './Header';

export default function MainLayout({ children, ...props }) {
  const theme = useColorMode();
  const layerStyles = theme.colorMode === 'light' ? 'lightGrad' : 'darkGrad';
  // console.log('THEME_OBJECT', theme);

  return (
    <Flex align='center' direction='column' height='100vh' layerStyle={layerStyles} {...props}>
      <Meta />
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </Flex>
  );
}
