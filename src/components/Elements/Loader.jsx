import { Center, Spinner } from '@chakra-ui/react';

export const Loader = () => {
  return (
    <Center>
      <Spinner color='fg-footer' size='xl' thickness='4px' speed='0.75s' />
    </Center>
  );
};

export default Loader;
