import { Container, HStack } from '@chakra-ui/react';

import { Logo, Navbar, ThemeToggle } from '@/components';

export default function Header() {
  return (
    <Container width='3xl'>
      <HStack justify='space-between' align='center'>
        <Logo />
        <Navbar />
        <ThemeToggle />
      </HStack>
    </Container>
  );
}
