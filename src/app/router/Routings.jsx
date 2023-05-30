import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

import {
  About,
  AiApps,
  BlogPostTitleGenerator,
  Contact,
  GenerateFaq,
  GenerateKeywords,
  HashtagsGenerator,
  Home,
  KeywordsExtractor,
  MetatagsGenerator,
  NotFound,
  SummarizeText
} from '@/app/pages';

import AiLayout from '../layouts/AiLayout';

export default function Routings() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait' initial={false}>
      <Routes key={location.pathname} location={location}>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='ai' element={<AiLayout />}>
            <Route index element={<AiApps />} />
            <Route path='generate-faq' element={<GenerateFaq />} />
            <Route path='summarize-text' element={<SummarizeText />} />
            <Route path='generate-keywords' element={<GenerateKeywords />} />
            <Route path='hashtags-generator' element={<HashtagsGenerator />} />
            <Route path='keywords-extractor' element={<KeywordsExtractor />} />
            <Route path='meta-tags-generator' element={<MetatagsGenerator />} />
            <Route path='blog-post-title-generator' element={<BlogPostTitleGenerator />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

// Todo: Add Pricing route at the end, also protected route for ai apps if you make auth
//* Fix: Unmount animations for Suspense Fallback component?
// https://github.com/framer/motion/issues/1193
