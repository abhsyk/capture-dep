import { FC, lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { GlobalStyle } from '../styles';
import { Nav } from './common';
import { AnimatePresence } from 'framer-motion';

const AboutUs = lazy(() => import('../pages/AboutUs'));
const ContactUs = lazy(() => import('../pages/ContactUs'));
const MovieDetail = lazy(() => import('../pages/MovieDetail'));
const OurWork = lazy(() => import('../pages/OurWork'));

const App: FC = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Nav />
      <Suspense fallback={<></>}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AboutUs />} />
            <Route path="/work" element={<OurWork />} />
            <Route path="/work/:slug" element={<MovieDetail />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
};

export default App;
