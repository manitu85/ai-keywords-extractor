import { Box, HStack, Text } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

const NavLink = ({ text }) => (
  <Box as='li' fontWeight='bold'>
    <Text fontSize='sm' textTransform='uppercase'>
      {text}
    </Text>
  </Box>
);

export default function Navbar() {
  return (
    <HStack spacing={6} as='nav'>
      <RouteLink to='/ai-keywords'>
        <NavLink text='AI Keywords' />
      </RouteLink>
      <RouteLink to='/about'>
        <NavLink text='About' />
      </RouteLink>
      <RouteLink to='/contact'>
        <NavLink text='Contact' />
      </RouteLink>
    </HStack>
  );
}
