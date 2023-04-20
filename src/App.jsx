import { Flex } from '@chakra-ui/react';

import MainLayout from '@/layout/MainLayout';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home';
import ThemeProvider from '@/theme/providers/ThemeProvider';

import Heading from './components/Heading';

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Flex direction='column' align='center'>
          <Heading />
          <Flex width='700px' justifyContent='space-between' align='center'>
            <Home />
            <About />
            <Contact />
          </Flex>
        </Flex>
      </MainLayout>
    </ThemeProvider>
  );
}
