import { FC, memo } from 'react';
import { About, FAQ, Services } from '../../components/about';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../styles';
import { ScrollTop } from '../../components/ui';

// -> App

const AboutUs: FC = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <About />
      <Services />
      <FAQ />
      <ScrollTop />
    </motion.div>
  );
};

export default memo(AboutUs);
