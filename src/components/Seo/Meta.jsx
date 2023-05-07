import { Helmet } from 'react-helmet-async';

const APP_NAME = 'AIKYE - AI keyword extractor';
const DESCRIPTION =
  'Keyword Extractor is an AI-powered (Chat GPT-3.5) keyword tool that can analyze any text and extract the most relevant keywords for you. It uses artificial intelligence to understand the context and meaning of your text and identify the keywords that best represent it.';

const Meta = () => {
  return (
    <Helmet>
      <title>Create Vite React Chakra UI App</title>
      <meta name='description' content={DESCRIPTION} />
      <meta name='application-name' content={APP_NAME} />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content={APP_NAME} />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='theme-color' content='#1cb5e0' />

      <link rel='shortcut icon' href='/assets/favicon.svg' />
      <link rel='manifest' href='/manifest.json' />
    </Helmet>
  );
};

export default Meta;
