import { Route, Routes } from 'react-router-dom';

import { About, AiKeywords, Contact, Home } from '@/pages';

export default function Routings() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ai-keywords' element={<AiKeywords />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

// Todo: Add animated routes
