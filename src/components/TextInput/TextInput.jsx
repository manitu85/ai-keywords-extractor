/* eslint-disable unicorn/consistent-function-scoping */
import {
  Button,
  chakra,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Select,
  Textarea,
  useToast
} from '@chakra-ui/react';
import { SelectOptions } from '@Elements';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

import { AI_TONE, AI_USE_CASES } from '@/utils';

const TextInput = ({ extractKeywords }) => {
  // const [text, setText] = useState('');
  // const toast = useToast();
  // if (text === '') {}
  // extractKeywords(text);
  // value={text}
  // onChange={e => setText(e.target.value)} >> handleChange
  // const handleSubmit = () => (text === '' ? errorToast() : successToast());

  // Optimized: useRef approach: Avoid multiple renders when typing, only the end input value is needed.
  const inputTextElement = useRef('');

  const errorToast = useToast({
    title: "Text field can't be empty",
    description: 'Please enter some text to extract keyword.',
    variant: 'toastError',
    status: 'error'
  });

  const successToast = useToast({
    title: 'Processing data... ',
    description: 'Your keyword will be here for few seconds.',
    variant: 'toastSuccess',
    status: 'success'
  });

  const handleSubmit = e => {
    e.preventDefault(); // add form submit
    const inputValue = inputTextElement.current?.value;
    if (inputValue === '') {
      errorToast();
    } else {
      successToast();
      extractKeywords(inputValue);
    }
  };

  // Todo: useState for both, and detach from input because is same for all cases (text is a text)
  const handleOptionsChange = e => console.log(e.target.value);
  const handleUseCasesChange = e => console.log(e.target.value);

  return (
    <FormControl>
      <FormLabel
        htmlFor='ai-keywords'
        textAlign='center'
        fontWeight='bold'
        fontSize='0.9em'
        color='fg-footer'
      >
        <HStack spacing={2}>
          <Select
            icon={<MdArrowDropDown />}
            placeholder='Select tone of voice'
            bg='bg-footer'
            borderColor='fg-footer'
            color='fg-footer'
            variant='outline'
            onChange={handleOptionsChange}
          >
            {AI_TONE.map(({ id, value, option }) => (
              <chakra.option key={id} value={value} bg='bg-footer !important'>
                {option}
              </chakra.option>
            ))}
          </Select>
          <Select
            icon={<MdArrowDropDown />}
            placeholder='Choose use case'
            bg='bg-footer'
            borderColor='fg-footer'
            color='fg-footer'
            variant='outline'
            onChange={handleUseCasesChange}
          >
            {AI_USE_CASES.map(({ id, value, option }) => (
              <chakra.option key={id} value={value} bg='bg-footer !important'>
                {option}
              </chakra.option>
            ))}
          </Select>
        </HStack>
        <Textarea
          ref={inputTextElement}
          id='ai-keywords'
          name='ai-keywords'
          color='fg-default'
          bg='bg-footer'
          p={2}
          mt={2}
          mb={4}
          h={200}
          focusBorderColor='fg-footer'
          placeholder='Paste text here ...'
          _placeholder={{ opacity: 0.8, color: 'fg-footer' }}
        />
        <Button
          as={motion.a}
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 250, ease: 'easeIn' }}
          bg='bg-transition'
          color='white'
          w='100%'
          py={3}
          mt={-2}
          mb={2}
          borderRadius='sm'
          cursor='pointer'
          onClick={handleSubmit}
        >
          Extract Keywords
        </Button>
        Paste in your text above and AIKYE will extract the keywords for you.
      </FormLabel>
    </FormControl>
  );
};

export default TextInput;

// Todo: Keywords input 0/60 (useful tips category)
// Todo: Refresh button max 3x times along side input button by IP address
// Todo: Make OptionsInput.jsx detached file
