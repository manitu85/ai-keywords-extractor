import { uid } from '@/utils';

export const FEATURE = {
  title: 'AI Keyword Extractor ',
  subtitle: ' A Smart, Automatic, Fast and Lightweight',
  desc: 'Keyword Extractor is an AI-powered (Chat GPT-3.5) keyword tool that can analyze any text and extract the most relevant keywords for you. It uses artificial intelligence to understand the context and meaning of your text and identify the keywords that best represent it.'
};

export const LIST_ITEMS = [
  {
    id: uid(),
    text: 'To summarize the main topics or themes of a text.'
  },
  {
    id: uid(),
    text: 'To facilitate information retrieval and search engine optimization.'
  },
  {
    id: uid(),
    text: 'To support text analysis and comparison.'
  },
  {
    id: uid(),
    text: 'Text comparison and similarity measurement between the competitor and your brand.'
  },
  {
    id: uid(),
    text: 'To aid text generation and paraphrasing.'
  }
];

export const LIST_CASES = [
  {
    id: uid(),
    text: 'Marketing and advertising: Analyze customer feedback, product reviews, and social media posts to understand customer needs and preferences, and to identify market trends. This information can be used to improve products and services and inform marketing strategies.'
  },
  {
    id: uid(),
    text: 'Search engine optimization (SEO): Optimize their website, blog, or social media posts to rank higher in search engine results and attract more traffic by identifying the most relevant keywords in a piece of content.'
  },
  {
    id: uid(),
    text: 'E-commerce: Analyze customer reviews, and identify the key issues or problems with their products.'
  },
  {
    id: uid(),
    text: 'Finance: Analyze news articles and identify important financial concepts, such as companies, products, and industry trends.'
  },
  {
    id: uid(),
    text: 'Healthcare: Analyze medical literature, facilitate medical reports understanding and identify important medical concepts and diseases.'
  },
  {
    id: uid(),
    text: 'Human Resources: Analyze resumes and job postings to identify important skills and qualifications for a particular job or industry.'
  }
];

export const NAV_LINKS = [
  {
    id: uid(),
    route: '/ai-keywords',
    link: 'AI Keywords'
  },
  {
    id: uid(),
    route: '/about',
    link: 'About'
  },
  {
    id: uid(),
    route: '/contact',
    link: 'Contact'
  }
];

export const AI_TONE = [
  {
    id: uid(),
    value: 'assertive',
    option: 'Assertive'
  },
  {
    id: uid(),
    value: 'formal',
    option: 'Formal'
  },
  {
    id: uid(),
    value: 'convincing',
    option: 'Convincing'
  },
  {
    id: uid(),
    value: 'compassionate',
    option: 'Compassionate'
  },
  {
    id: uid(),
    value: 'friendly',
    option: 'Friendly'
  },
  {
    id: uid(),
    value: 'casual',
    option: 'Casual'
  },
  {
    id: uid(),
    value: 'professional',
    option: 'Professional'
  }
];
export const AI_USE_CASES = [
  {
    id: uid(),
    value: 'keywords extractor',
    option: 'Keywords extractor'
  },
  {
    id: uid(),
    value: 'keywords generator',
    option: 'Generate keywords'
  },
  {
    id: uid(),
    value: 'hashtags generator',
    option: 'Hashtags generator'
  }
];

// Examples:
// Add Select tone of voice for your keywords: options (professional, assertive, casual, friendly, compassionate, convincing, formal)
// Add choose use case: (keywords extractor, keywords generator, generate hashtags article/title generator, ads generator, summarizer etc.)
