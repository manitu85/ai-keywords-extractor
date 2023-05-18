import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import { KeywordsModal } from '@Elements';
import { useState } from 'react';

import { TextInput } from '@/components';
import { MotionRouteTransition } from '@/components/Motion';
import MotionBox from '@/components/Motion/MotionBox';
import { OPENAI_API_KEY } from '@/config';
import { routeProps } from '@/theme/motion/motion.variants';
import { axiosClient } from '@/utils';

const headerResponsiveSizes = ['1.75rem', '2rem', '2.5rem'];

export default function ExtractKeywords() {
  //* chakra hook
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [keywords, setKeywords] = useState([]);
  // const [voiceStyle, setVoiceStyle] = useState('');
  // const [useCase, setUseCase] = useState('');
  const [loading, setLoading] = useState(false);

  // const generateKeywords = async (prompt, voiceStyle) => {};
  // const generateHashtags = async (prompt, voiceStyle) => {};

  const extractKeywords = async (prompt, voiceStyle) => {
    setLoading(true);
    onOpen(true);

    const options = {
      //* Custom headers to be sent, also you can use instance global header for auth
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`
      },
      //* Data to be sent as the request body
      data: {
        model: 'text-davinci-003',
        prompt: `Take on the persona of expert SEO Marketing with 5 years of experience. The writing style is ${voiceStyle}. Extract keywords from this text and make the first letter of every word uppercase and separate with commas:\n\n ${prompt} &nbsp; The output should include relevant 10 keywords at least. `,
        temperature: 0.5,
        max_tokens: 60, // test with 30
        top_p: 1,
        frequency_penalty: 0.8,
        presence_penalty: 0
      }
    };

    try {
      //* axios instance already include url path, we need only data as body request
      const res = await axiosClient.post('/completions', options);
      const data = await res.data;

      if (res.status === 200) {
        console.log('BOT:', data.choices[0].text.trim());
        setKeywords(data.choices[0].text.trim());
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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
                AI Extracted Keywords
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
          <TextInput extractKeywords={extractKeywords} />
          <KeywordsModal keywords={keywords} loading={loading} isOpen={isOpen} onClose={onClose} />
        </Container>
      </MotionBox>
      <MotionRouteTransition />
    </>
  );
}

// Todo: Add custom button variants
// Todo: Change background of TextInput

//! Don't expose openai api key on frontend
// Todo: Make custom backend with express.js, store and protect openai api key and post prompt request from server to openai (-i pkg: express, dotenv, cors, body-parser, node:path, node:fs, openai node)
// Todo: Call backend api on frontend when you made node server (-i pkg: nodemon, concurrently)

// v1/completions;
//* model: 'text-davinci-003', GPT-3.5 // $0.0200 / 1K tokens
//* model: 'text-curie-001', GPT-3 // $0.0020 / 1K tokens
//* model: 'text-babbage-001', GPT-3 // $0.0005 / 1K tokens
//* model: 'text-ada-001', GPT-3 // $0.0004 / 1K tokens
