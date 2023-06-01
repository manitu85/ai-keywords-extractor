import { Heading, HStack, VStack } from '@chakra-ui/react';

import {
  ChakraLogo,
  EslintLogo,
  FramerMotionLogo,
  GitHooksLogo,
  OpenAiLogo,
  PrettierLogo,
  ReactLogo,
  ViteLogo
} from '@/assets';

const Technologies = () => {
  const plusStyles = {
    fontSize: '1rem',
    fontWeight: 'bold'
  };

  return (
    <VStack justify='center' align='center' mb={6} mt={-2}>
      <Heading as='h6' fontSize='0.75em' mb={2} textTransform='uppercase' letterSpacing='widest'>
        Builded with Next Generation Frontend Tools
      </Heading>
      <HStack spacing={2} wrap='wrap'>
        <ViteLogo />
        <span style={plusStyles}>+</span>
        <ReactLogo />
        <span style={plusStyles}>+</span>
        <ChakraLogo />
        <span style={plusStyles}>+</span>
        <FramerMotionLogo />
        <span style={plusStyles}>+</span>
        <OpenAiLogo />
        <span style={plusStyles}>+</span>
        <GitHooksLogo />
        <span style={plusStyles}>+</span>
        <EslintLogo />
        <span style={plusStyles}>+</span>
        <PrettierLogo />
      </HStack>
    </VStack>
  );
};
export default Technologies;
