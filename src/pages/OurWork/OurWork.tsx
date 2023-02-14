import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
  Hide,
} from '../../styles';
import { useScroll } from '../../hooks/useScroll';
import { ScrollTop } from '../../components/ui';

const OurWork: FC = () => {
  const { element, controls } = useScroll();
  const { element: element2, controls: controls2 } = useScroll();

  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: '#fff' }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img
              variants={photoAnim}
              src="/images/athlete-small.png"
              alt="athlete"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie
        variants={fade}
        animate={controls2}
        initial="hidden"
        ref={element2}
      >
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/the-racer">
          <img src="/images/theracer-small.png" alt="theracer" />
        </Link>
      </Movie>
      <Movie variants={fade} animate={controls} initial="hidden" ref={element}>
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/good-times">
          <img src="/images/goodtimes-small.png" alt="goodtimes" />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

// Styles
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
  }
  @media (max-width: 1300px) {
    padding: 2rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 1;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default memo(OurWork);
