/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  VStack,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

import { MotionRouteTransition } from '@/components/Motion';
import MotionBox from '@/components/Motion/MotionBox';
import { routeProps } from '@/theme/motion/motion.variants';

export default function Contact() {
  return (
    <>
      <MotionBox {...routeProps}>
        <Container maxW='full' mt={0} centerContent overflow='hidden'>
          <Flex>
            <Box
              bg='bg-footer'
              color='fg-default'
              borderRadius='lg'
              m={{ sm: 4, md: 16, lg: 10 }}
              p={{ sm: 5, md: 5, lg: 16 }}
            >
              <Box p={4}>
                <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                  <WrapItem>
                    <Box>
                      <Heading>Contact</Heading>
                      <Text mt={{ sm: 3, md: 3, lg: 5 }} color='gray.500'>
                        Fill up the form below to contact
                      </Text>
                      <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                        <VStack pl={0} spacing={3} alignItems='flex-start'>
                          {/* // add contact info and short desc */}
                        </VStack>
                      </Box>
                    </Box>
                  </WrapItem>
                  {/* Form */}
                  <WrapItem>
                    <Box bg='white' borderRadius='lg'>
                      <Box m={8} color='#0B0E3F'>
                        <VStack spacing={5}>
                          <FormControl id='name'>
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup borderColor='#E0E1E7'>
                              <InputLeftElement
                                pointerEvents='none'
                                children={<BsPerson color='gray.800' />}
                              />
                              <Input type='text' size='md' />
                            </InputGroup>
                          </FormControl>
                          <FormControl id='name'>
                            <FormLabel>Mail</FormLabel>
                            <InputGroup borderColor='#E0E1E7'>
                              <InputLeftElement
                                pointerEvents='none'
                                children={<MdOutlineEmail color='gray.800' />}
                              />
                              <Input type='text' size='md' />
                            </InputGroup>
                          </FormControl>
                          <FormControl id='name'>
                            <FormLabel>Message</FormLabel>
                            <Textarea
                              borderColor='gray.300'
                              _hover={{
                                borderRadius: 'gray.300'
                              }}
                              placeholder='message'
                              _placeholder={{ opacity: 0.6, color: 'base.400' }}
                            />
                          </FormControl>
                          <FormControl id='name' float='right'>
                            <Button
                              variant='solid'
                              bg='bg-default'
                              color='white'
                              _hover={{}}
                              py={2}
                              px={4}
                              borderRadius='sm'
                            >
                              Send Message
                            </Button>
                            <FormHelperText color='base.500'>
                              *We will never share your data.
                            </FormHelperText>
                          </FormControl>
                        </VStack>
                      </Box>
                    </Box>
                  </WrapItem>
                </Wrap>
              </Box>
            </Box>
          </Flex>
        </Container>
      </MotionBox>
      <MotionRouteTransition />
    </>
  );
}

// Todo: Try Chakra UI + Formik to implement
// https://chakra-ui.com/getting-started/with-formik
