/* eslint-disable prefer-spread */
import { Box, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import { scrollToTop } from '@/utils';

export default function Footer() {
  const { pathname } = useLocation();
  const aboutPath = pathname === '/about';
  return (
    <Box
      as='footer'
      w='full'
      fontWeight='medium'
      bg='bg-footer'
      pos='sticky'
      bottom='0'
      left='0'
      right='0'
      cursor={aboutPath ? 'pointer' : 'not-allowed'}
      onClick={aboutPath ? scrollToTop : undefined}
    >
      <Text
        py={6}
        fontSize='sm'
        textAlign='center'
        color='fg-footer'
        letterSpacing='wider'
        fontWeight='bold'
      >
        Copyright &copy; AIKYE {new Date().getFullYear()}{' '}
      </Text>
    </Box>
  );
}
