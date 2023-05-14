import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Textarea,
  useToast
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const TextInput = ({ extractKeywords }) => {
  // const [text, setText] = useState('');
  // const toast = useToast();
  // if (text === '') {}
  // extractKeywords(text);
  // value={text}
  // onChange={e => setText(e.target.value)}
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
    const inputValue = inputTextElement.current?.value;
    e.preventDefault(); // add form submit
    if (inputValue === '') {
      errorToast();
    } else {
      successToast();
      extractKeywords(inputValue);
    }
  };

  return (
    <FormControl>
      <FormLabel
        htmlFor='ai-keywords'
        textAlign='center'
        fontWeight='bold'
        fontSize='0.9em'
        color='fg-footer'
      >
        <Textarea
          id='ai-keywords'
          ref={inputTextElement}
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

// Todo: instead use react-tostafy lib
