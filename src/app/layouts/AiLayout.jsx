import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export default function AiLayout() {
  return (
    <Container maxW='5xl' py={0}>
      <Outlet />
    </Container>
  );
}
