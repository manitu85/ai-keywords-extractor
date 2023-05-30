import { Box, Container, useColorMode } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import MainContainer from '@/components/_Elements/Container';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Meta from '@/components/Seo/Meta';

export default function MainLayout({ children, ...props }) {
  const theme = useColorMode();
  const layerStyles = theme.colorMode === 'light' ? 'lightGrad' : 'darkGrad';
  // console.log('THEME_OBJECT', theme);

  return (
    <Box layerStyle={layerStyles} {...props}>
      <Meta />
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </Box>
  );
}
