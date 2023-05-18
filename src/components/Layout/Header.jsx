import { Container, HStack } from '@chakra-ui/react';

import { Logo, Navbar, ThemeToggle } from '@/components';

export default function Header() {
  return (
    <Container>
      <HStack justify='space-between' align='center' flexWrap='wrap'>
        <Logo />
        <Navbar />
        <ThemeToggle />
      </HStack>
    </Container>
  );
}
