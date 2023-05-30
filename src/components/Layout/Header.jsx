import { Container, Flex, HStack, Spacer, useMediaQuery, VStack } from '@chakra-ui/react';

import { Logo, Navbar, ThemeToggle } from '@/components';

export default function Header() {
  const [isLargerThanMobile] = useMediaQuery('(min-width: 500px)');
  return (
    <Container>
      {isLargerThanMobile ? (
        <HStack justify='space-between' align='center' flexWrap='wrap'>
          <Logo />
          <Navbar />
          <ThemeToggle />
        </HStack>
      ) : (
        <VStack justify='center' flexWrap='wrap'>
          <Flex w={325}>
            <Logo />
            <Spacer />
            <ThemeToggle />
          </Flex>
          <Navbar />
        </VStack>
      )}
    </Container>
  );
}
