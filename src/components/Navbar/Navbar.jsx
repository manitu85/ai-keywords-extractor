import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import { Link as RouteLink, useLocation } from 'react-router-dom';

import { NAV_LINKS } from '@/utils';

const NavLink = ({ icon, link, route }) => {
  const { pathname } = useLocation();
  return (
    <Box
      as='li'
      pos='relative'
      fontSize={{ base: '0.75em', md: '0.9em' }}
      fontWeight='bold'
      textTransform='uppercase'
      _hover={{ color: 'fg-footer' }}
    >
      <RouteLink to={route} className={pathname === route ? 'selected' : ''}>
        <Box display='inline-flex'>
          <Icon as={icon} mr={2} boxSize={4} transform='translateY(2px)' />
          <Text>{link}</Text>
        </Box>
      </RouteLink>
    </Box>
  );
};

export default function Navbar() {
  return (
    <HStack spacing={6} as='nav'>
      {NAV_LINKS.map(({ id, route, link, icon }) => (
        <NavLink key={id} route={route} link={link} icon={icon} />
      ))}
    </HStack>
  );
}

// Todo: Add responsive styles to menu (logo center, down menu + mode)
