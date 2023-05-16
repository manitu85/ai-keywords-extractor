import { Box, HStack, Text } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

import { NAV_LINKS } from '@/utils';

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
      {NAV_LINKS.map(({ id, route, link }) => (
        <RouteLink key={id} to={route}>
          <NavLink text={link} />
        </RouteLink>
      ))}
    </HStack>
  );
}

// Todo: Add responsive styles to navbar
