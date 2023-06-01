import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouteLink, useLocation } from 'react-router-dom';

import { NAV_LINKS } from '@/utils';

const NavLink = ({ icon, link, route }) => {
  const { pathname } = useLocation();

  return (
    <Box
      as={motion.li}
      pos='relative'
      fontSize={{ base: '0.75em', md: '0.9em' }}
      fontWeight='bold'
      textTransform='uppercase'
      transition={{ duration: 0.25, ease: 'easeOut' }}
      _hover={{ color: 'fg-footer' }}
    >
      <RouteLink to={route} className={pathname === route ? 'selected' : ''}>
        <Box display='inline-flex'>
          <Icon as={icon} mr={2} boxSize={4} transform='translateY(3px)' />
          <Text>{link}</Text>
        </Box>
      </RouteLink>
    </Box>
  );
};

export default function Navbar() {
  return (
    <HStack spacing={6} as='nav'>
      {NAV_LINKS.map(({ id, ...otherProps }) => (
        <NavLink key={id} {...otherProps} />
      ))}
    </HStack>
  );
}
