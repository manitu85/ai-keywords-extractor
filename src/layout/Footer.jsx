/* eslint-disable prefer-spread */
import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box as='footer' w='full' fontWeight='bold' py={10}>
      <Text as='h4' pt={6} fontSize='md' textAlign='center'>
        Copyright &copy; Create Vite React Chakra {new Date().getFullYear()}{' '}
      </Text>
    </Box>
  );
}
