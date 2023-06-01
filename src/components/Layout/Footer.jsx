/* eslint-disable prefer-spread */
import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { scrollToTop } from '@/utils';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY >= 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

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
      cursor={isVisible ? 'pointer' : 'not-allowed'}
      onClick={isVisible ? scrollToTop : undefined}
    >
      <Text
        py={6}
        fontSize={{ base: '0.75em', md: '0.85em' }}
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
