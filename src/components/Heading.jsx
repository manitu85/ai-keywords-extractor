import { Flex } from '@chakra-ui/react';

import { ChakraLogo, EslintLogo, PrettierLogo, ReactLogo, ViteLogo } from '@/assets';

export default function Heading() {
  const styles = {
    fontSize: '3rem',
    fontWeight: 'bold'
  };
  return (
    <Flex direction='column' justify='center' align='center'>
      <h1 style={{ fontSize: '3rem', marginBottom: '-0.5rem' }}>Create Vite React App</h1>
      <h2>Next Generation Frontend Tools</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '2rem'
        }}
      >
        <ViteLogo />
        <span style={styles}>+</span>
        &nbsp;
        <ReactLogo />
        &nbsp;
        <span style={styles}>+</span>
        &nbsp;
        <EslintLogo />
        &nbsp;
        <span style={styles}>+</span>
        &nbsp;
        <PrettierLogo />
        &nbsp;
        <span style={styles}>+</span>
        &nbsp;
        <ChakraLogo />
      </div>
    </Flex>
  );
}
