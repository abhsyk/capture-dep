import { motion } from 'framer-motion';
import { FC, memo } from 'react';
import {
  Description,
  StyledAbout,
  Image,
  Hide,
  titleAnim,
  fade,
  photoAnim,
} from '../../../styles';
import { Wave } from '../../ui';

// -> AboutUs page

const About: FC = () => {
  return (
    <StyledAbout>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achieve it.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img src="/images/home1.png" variants={photoAnim} alt="home1" />
      </Image>
      <Wave />
    </StyledAbout>
  );
};

export default memo(About);
