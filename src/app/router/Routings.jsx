import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

import { About, AiKeywords, Contact, Home, NotFound } from '@/app/pages';

export default function Routings() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait' initial={false}>
      <Routes key={location.pathname} location={location}>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/ai-keywords' element={<AiKeywords />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

// Todo: Add Pricing
