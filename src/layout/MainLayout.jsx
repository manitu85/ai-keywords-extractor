import { Flex } from '@chakra-ui/react';

import Container from '@/components/Elements/Container';

import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

export default function MainLayout({ children, ...props }) {
  return (
    <Flex direction='column' align='center' flexDirection='column' {...props}>
      <Meta />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Flex>
  );
}
