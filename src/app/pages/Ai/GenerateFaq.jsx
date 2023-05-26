import { useAiKeywordsContext } from '@App/context';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Text,
  useDisclosure,
  useToast,
  VStack
} from '@chakra-ui/react';
import { KeywordsModal } from '@Elements';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

import { PromptInput, Select } from '@/components';
import { MotionRouteTransition } from '@/components/Motion';
import MotionBox from '@/components/Motion/MotionBox';
import { OPENAI_API_KEY } from '@/config';
import { routeProps } from '@/theme/motion/motion.variants';
import { AI_MAX_NUMBER, AI_TONE, axiosClient, capitalize } from '@/utils';

const headerResponsiveSizes = ['1.75rem', '2rem', '2.5rem'];

export default function GenerateFaq() {
  //* Pass Input ref
  const inputTextElement = useRef('');

  //* chakra hook
  const { isOpen, onOpen, onClose } = useDisclosure();

  //* Loading state
  const [loading, setLoading] = useState(false);

  //* Global context
  const { prompt, setPrompt } = useAiKeywordsContext();
  const { voiceStyleSelect, setVoiceStyleSelect } = useAiKeywordsContext();
  const { maxNumberSelect, setMaxNumberSelect } = useAiKeywordsContext();

  // Goes to utils
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

  //* handler func.
  const handleOptionsChange = e => setVoiceStyleSelect(e.target.value);
  const handleUseCasesChange = e => setMaxNumberSelect(e.target.value);

  // console.log('KEYWORDS:', keywords);
  // const generateKeywords = async (prompt, voiceStyle) => {};
  // const generateHashtags = async (prompt, voiceStyle) => {};

  const extractKeywords = async (text, tone, number) => {
    setLoading(true);
    onOpen(true);

    console.log('PROMPT:', prompt);
    console.log('TONE:', tone);
    console.log('CASE:', number);

    // Ensure only the minimal needed data is exposed
    const extractedKeywordsOptions = {
      //* Custom headers to be sent, also you can use instance global header for auth
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`
      },
      //* Data to be sent as the request body
      data: {
        model: 'text-davinci-003',
        prompt: `Take on the persona of expert SEO Marketing with 5 years of experience. The writing style is ${tone} tone of voice and the output should include ${number} relevant keywords. Extract keywords from this text and make the first letter of every word uppercase and separate with commas:\n\n ${text} &nbsp;  `,
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1,
        frequency_penalty: 0.8,
        presence_penalty: 0
      }
    };
    try {
      //* axios instance already include url path, we need only data as body request
      const res = await axiosClient.post('/completions', extractedKeywordsOptions);
      const data = await res.data;

      if (res.status === 200) {
        console.log('BOT:', data.choices[0].text.trim());
        setPrompt(data.choices[0].text.trim());
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    let inputValue = inputTextElement.current?.value;
    if (inputValue === '') {
      errorToast();
    } else {
      successToast();
      extractKeywords(inputValue, voiceStyleSelect, maxNumberSelect);
      inputValue = '';
    }
  };

  return (
    <>
      <MotionBox {...routeProps}>
        <Container maxW='3xl'>
          <VStack spacing={1}>
            <HStack>
              <Image src='/src/assets/bulb.svg' w='4rem' h='4rem' mr={2} />
              <Heading
                as='h1'
                color='white'
                fontSize={headerResponsiveSizes}
                fontFamily='"Open Sans"'
              >
                {capitalize('Fast Keywords Extractor')}
              </Heading>
            </HStack>
            <HStack mt='-0.5rem !important'>
              <Image src='/src/assets/openai.svg' w='1.25rem' h='1.25rem' />
              <Text>Powered by Open AI</Text>
            </HStack>
          </VStack>
          <Text align='left' py={8} fontSize='1.05rem' lineHeight='1.25' color='base.200'>
            Keyword Extractor is an AI-powered (Chat GPT-3.5) keyword tool that can analyze any text
            and extract the most relevant keywords, generate keywords and make hashtags for you.
          </Text>

          <FormControl>
            <FormLabel
              htmlFor='ai-bot'
              textAlign='center'
              fontWeight='bold'
              fontSize='0.9em'
              color='fg-footer'
            >
              <HStack spacing={2}>
                <Select
                  options={AI_TONE}
                  value={voiceStyleSelect}
                  handler={handleOptionsChange}
                  placeholder='Select tone of voice'
                />
                <Select
                  options={AI_MAX_NUMBER}
                  value={Number(maxNumberSelect)}
                  handler={handleUseCasesChange}
                  placeholder='Max number of words'
                />
              </HStack>
              <PromptInput ref={inputTextElement} placeholder='Paste text here ...' />
              <Button
                type='submit'
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
                Generate Results
              </Button>
              Paste in your text above and AIKYE will extract the keywords for you.
            </FormLabel>
          </FormControl>
          <KeywordsModal keywords={prompt} loading={loading} isOpen={isOpen} onClose={onClose} />
        </Container>
      </MotionBox>
      <MotionRouteTransition />
    </>
  );
}

// Todo: Add custom button variants
// Todo: Change name keywords of modal to prompt

//! Don't expose openai api key on frontend
// Todo: Make custom backend with express.js, store and protect openai api key and post prompt request from server to openai (-i pkg: express, dotenv, cors, body-parser, node:path, node:fs, openai node)
// Todo: Call backend api on frontend when you made node server (-i pkg: nodemon, concurrently)

// v1/completions;
//* model: 'text-davinci-003', GPT-3 // $0.0200 / 1K tokens
//* model: 'text-curie-001', GPT-3 // $0.0020 / 1K tokens
//* model: 'text-babbage-001', GPT-3 // $0.0005 / 1K tokens
//* model: 'text-ada-001', GPT-3 // $0.0004 / 1K tokens
