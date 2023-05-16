import axios from 'axios';

import { OPENAI_API_KEY, OPENAI_BASE_URL } from '@/config';

//* Create new axios instance with base URL and headers
//* Now you can use instance methods: axiosClient.{GET, POST, PUT, DELETE}
export const axiosClient = axios.create({
  baseURL: OPENAI_BASE_URL,
  //* `headers` are custom headers to be sent
  headers: {
    // Authorization: `Bearer ${OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

//* Alter defaults after instance has been created
// eslint-disable-next-line dot-notation
// axiosClient.defaults.headers.common['Authorization'] = OPENAI_API_KEY;
