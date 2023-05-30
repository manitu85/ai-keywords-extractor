/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Checkbox,
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
import { useFormik } from 'formik';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import * as yup from 'yup';

import { MotionRouteTransition } from '@/components/Motion';
import MotionBox from '@/components/Motion/MotionBox';
import { routeProps } from '@/theme/motion/motion.variants';

const validationSchema = yup.object().shape({
  name: yup
    .string('Enter your name')
    .min(8, 'Name should be max 24 characters length')
    .max(24, 'Too long name!')
    .required('Name is required'),
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  text: yup.string('Enter your message').required('Message is required')
});

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      text: '',
      rememberMe: false
    },
    validationSchema,
    onSubmit: async values => {
      // eslint-disable-next-line no-promise-executor-return
      await new Promise(resolve => setTimeout(resolve, 500));
      //  eslint-disable-next-line unicorn/no-null,
      alert(JSON.stringify(values, null, 2));
    }
  });
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
                          <form onSubmit={formik.handleSubmit}>
                            <FormControl mb={2}>
                              <FormLabel htmlFor='name'>Your Name:</FormLabel>
                              <InputGroup borderColor='#E0E1E7'>
                                <InputLeftElement
                                  pointerEvents='none'
                                  children={<BsPerson color='gray.800' />}
                                />
                                <Input
                                  id='name'
                                  name='name'
                                  type='text'
                                  onChange={formik.handleChange}
                                  value={formik.values.name}
                                  error={formik.touched.name && Boolean(formik.errors.name)}
                                  size='md'
                                />
                              </InputGroup>
                              {formik.touched.name && formik.errors.name ? (
                                <FormHelperText color='red.500' fontWeight='medium'>
                                  {formik.errors.name}
                                </FormHelperText>
                              ) : undefined}
                            </FormControl>
                            <FormControl mb={2}>
                              <FormLabel htmlFor='email'>Email: </FormLabel>
                              <InputGroup borderColor='#E0E1E7'>
                                <InputLeftElement
                                  pointerEvents='none'
                                  children={<MdOutlineEmail color='gray.800' />}
                                />
                                <Input
                                  id='email'
                                  name='email'
                                  type='email'
                                  onChange={formik.handleChange}
                                  value={formik.values.email}
                                  error={formik.touched.email && Boolean(formik.errors.email)}
                                  size='md'
                                />
                              </InputGroup>
                              {formik.touched.email && formik.errors.email ? (
                                <FormHelperText color='red.500' fontWeight='medium'>
                                  {formik.errors.email}
                                </FormHelperText>
                              ) : undefined}
                            </FormControl>
                            <FormControl>
                              <FormLabel htmlFor='text'>Message:</FormLabel>
                              <Textarea
                                id='text'
                                name='text'
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.text}
                                error={formik.touched.text && Boolean(formik.errors.text)}
                                size='md'
                                borderColor='gray.300'
                                _hover={{
                                  borderRadius: 'gray.300'
                                }}
                                placeholder='message'
                                _placeholder={{ opacity: 0.6, color: 'base.400' }}
                              />
                              {formik.touched.text && formik.errors.text ? (
                                <FormHelperText color='red.500' fontWeight='medium'>
                                  {formik.errors.text}
                                </FormHelperText>
                              ) : undefined}
                            </FormControl>
                            <FormControl float='right' py={2}>
                              <Button
                                type='submit'
                                variant='solid'
                                color='white'
                                bg='bg-default'
                                borderRadius='sm'
                                width='full'
                                py={2}
                                px={4}
                                _hover={{}}
                              >
                                Send Message
                              </Button>
                            </FormControl>
                            <Checkbox
                              id='rememberMe'
                              name='rememberMe'
                              onChange={formik.handleChange}
                              isChecked={formik.values.rememberMe}
                              colorScheme='purple'
                            >
                              Remember me?
                            </Checkbox>
                          </form>
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

// https://chakra-ui.com/getting-started/with-formik
