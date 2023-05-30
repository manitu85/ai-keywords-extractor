/* eslint-disable unicorn/consistent-function-scoping */
import { Textarea } from '@chakra-ui/react';
import { forwardRef } from 'react';

const PromptInput = forwardRef(({ placeholder, ...props }, ref) => {
  // console.log('INPUT_REF', ref.current.value);
  return (
    <Textarea
      {...props}
      ref={ref}
      id='ai-bot'
      name='ai-bot'
      color='fg-default'
      bg='bg-footer'
      p={2}
      mt={2}
      mb={4}
      h={200}
      focusBorderColor='fg-footer'
      placeholder={placeholder}
      _placeholder={{ opacity: 0.8, color: 'fg-footer' }}
    />
  );
});

export default PromptInput;

// Todo: Keywords limited character input 0/60 (useful tips category)
// Todo: Refresh button max 3x times along side input button by IP address
