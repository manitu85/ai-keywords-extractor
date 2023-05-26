/* eslint-disable sonarjs/no-duplicate-string */
import { BsPatchQuestion, BsRobot, BsTagsFill } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';
import { GiCrossedSwords, GiStripedSword, GiSwordsEmblem, GiSwordSlice } from 'react-icons/gi';
import { MdOutlineSubtitles, MdOutlineSummarize } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si';

import { uid } from '@/utils';

export const FEATURE = {
  title: 'Discover AI apps for SEO usecase',
  subtitle: 'A Smart, Automatic, Fast and Lightweight',
  // subtitle: 'Boost your creativity & productivity',
  desc: 'AIKYE is an AI-powered (Chat GPT-3.5) keyword tool that can analyze any text and extract the most relevant keywords for you. It uses artificial intelligence to understand the context and meaning of your text and identify the keywords that best represent it.'
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
    route: '/ai',
    icon: BsRobot,
    link: 'AI Generators'
  },
  {
    id: uid(),
    route: '/about',
    icon: BsPatchQuestion,
    link: 'About'
  },
  {
    id: uid(),
    route: '/contact',
    icon: SiMinutemailer,
    link: 'Contact'
  }
];

export const AI_TONE = [
  {
    id: uid(),
    val: 'assertive',
    option: 'Assertive'
  },
  {
    id: uid(),
    val: 'casual',
    option: 'Casual'
  },
  {
    id: uid(),
    val: 'convincing',
    option: 'Convincing'
  },
  {
    id: uid(),
    val: 'creative',
    option: 'Creative'
  },
  {
    id: uid(),
    val: 'descriptive',
    option: 'Descriptive'
  },
  {
    id: uid(),
    val: 'formal',
    option: 'Formal'
  },
  {
    id: uid(),
    val: 'friendly',
    option: 'Friendly'
  },
  {
    id: uid(),
    val: 'professional',
    option: 'Professional'
  },
  {
    id: uid(),
    val: 'thoughtful',
    option: 'Thoughtful'
  }
];
export const AI_MAX_NUMBER = [
  {
    id: uid(),
    val: '5',
    option: '5'
  },
  {
    id: uid(),
    val: '10',
    option: '10'
  },
  {
    id: uid(),
    val: '15',
    option: '15'
  },
  {
    id: uid(),
    val: '20',
    option: '20'
  },
  {
    id: uid(),
    val: '25',
    option: '25'
  }
];

export const AI_PROMPTS = [
  {
    id: uid(),
    icon: GiSwordSlice,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elite.',
    title: 'Keywords ideas generator',
    route: '/ai/generate-keywords'
  },
  {
    id: uid(),
    icon: GiCrossedSwords,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elite.',
    title: 'Keywords extractor',
    route: '/ai/keywords-extractor'
  },
  {
    id: uid(),
    icon: GiSwordsEmblem,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elite.',
    title: 'Hashtags generator',
    route: '/ai/hashtags-generator'
  },
  {
    id: uid(),
    icon: BsTagsFill,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elite.',
    title: 'Meta tags generator',
    route: '/ai/meta-tags-generator'
  },
  {
    id: uid(),
    icon: MdOutlineSubtitles,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elite.',
    title: 'Blog post title generator',
    route: '/ai/blog-post-title-generator'
  },
  {
    id: uid(),
    icon: FaQuoteLeft,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elite.',
    title: 'Generate an FAQ',
    route: '/ai/generate-faq'
  },
  {
    id: uid(),
    icon: MdOutlineSummarize,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elite.',
    title: 'Summarize text',
    route: '/ai/summarize-text'
  },
  {
    id: uid(),
    icon: GiStripedSword,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elite.',
    title: 'More use cases coming soon',
    route: '/ai/coming-soon'
  }
];

// Examples:
// Add Select tone of voice for your keywords: options (professional, assertive, casual, friendly, compassionate, convincing, formal)
// Add choose use case: (keywords extractor, keywords generator, generate hashtags article/title
// generator, ads generator, summarizer etc.)

// <Card
//   title={title}
//   icon={<Icon as={icon} w={10} h={10} />}
//   description={description}
//   route={route}
// />;
