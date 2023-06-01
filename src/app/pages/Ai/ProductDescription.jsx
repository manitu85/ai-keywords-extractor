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
import { useBetterToast } from '@/hooks/useBetterToast';
import { routeProps } from '@/theme/motion/motion.variants';
import { AI_MAX_NUMBER, AI_TONE, axiosClient, capitalize } from '@/utils';

const headerResponsiveSizes = ['1.75rem', '2rem', '2.5rem'];

export default function ProductDescription() {
  //* Pass Input ref
  const inputTextElement = useRef('');

  // eslint-disable-next-line no-unused-vars
  const [{ successToast, errorToast }] = useBetterToast();

  //* chakra hook
  const { isOpen, onOpen, onClose } = useDisclosure();

  //* Loading state
  const [loading, setLoading] = useState(false);

  //* Global context
  const { prompt, setPrompt } = useAiKeywordsContext();
  const { voiceStyleSelect, setVoiceStyleSelect } = useAiKeywordsContext();
  const { maxNumberSelect, setMaxNumberSelect } = useAiKeywordsContext();

  const extractKeywords = async (content, tone, number) => {
    setLoading(true);
    onOpen(true); // Modal

    console.log('PROMPT:', prompt);
    console.log('TONE:', voiceStyleSelect);
    console.log('MAX_NUMBER:', maxNumberSelect);

    // Ensure only the minimal needed data is exposed
    const extractedKeywordsOptions = {
      //* Custom headers to be sent, also you can use instance global header for auth
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`
      },
      //* Data to be sent as the request body
      data: {
        model: 'text-davinci-003',
        prompt: `Write a short paragraph that persuades [audience] to buy [product] and include the CTA: ${content}`,
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1,
        frequency_penalty: 0.8,
        presence_penalty: 0
      }
    };
    try {
      //* axios instance already include url path, needed only data as body request
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

  //* handler func.
  const handleOptionsChange = e => setVoiceStyleSelect(e.target.value);
  const handleMaxNumberChange = e => setMaxNumberSelect(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = inputTextElement.current?.value;
    if (inputValue === '') {
      errorToast({
        message: "Text field can't be empty",
        description: 'Please enter some text to extract keyword.'
      });
    } else {
      successToast({
        message: 'Processing data... ',
        description: 'Your keywords will be here for few seconds.'
      });
      extractKeywords(inputValue, voiceStyleSelect, maxNumberSelect);
      inputTextElement.current.value = '';
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
                {capitalize('Product Description')}
              </Heading>
            </HStack>
          </VStack>
          <Text align='left' py={8} fontSize='1.05rem' lineHeight='1.25' color='base.200'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quasi laborum itaque
            ex libero, error molestias placeat voluptatem, natus perferendis porro eveniet, quo illo
            aliquam unde quos quia praesentium veniam!
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
                  handler={handleMaxNumberChange}
                  placeholder='Set max number of words'
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
