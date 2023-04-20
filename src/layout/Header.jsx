import { Flex, HStack, Text } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex justify='space-between' align='center' w='100%' py={4}>
      <HStack spacing='12px'>
        <Text>Menu</Text>
      </HStack>
      <Text>Logo</Text>
    </Flex>
  );
}
