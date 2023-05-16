import { ColorModeScript, createStandaloneToast } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

import customTheme from '@/theme';

import App from './app/App';

// chakra toast
const { ToastContainer } = createStandaloneToast();

// eslint-disable-next-line unicorn/prefer-query-selector
const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
  <StrictMode>
    <HelmetProvider>
      <Router>
        <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
        <ToastContainer />
        <App />
      </Router>
    </HelmetProvider>
  </StrictMode>
);
