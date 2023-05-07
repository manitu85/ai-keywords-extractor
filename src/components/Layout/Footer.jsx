/* eslint-disable prefer-spread */
import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box as='footer' w='full' fontWeight='bold' bg='bg-footer'>
      <Text py={6} fontSize='sm' textAlign='center' color='fg-accent'>
        Copyright &copy; AIKYE {new Date().getFullYear()}{' '}
      </Text>
    </Box>
  );
}
