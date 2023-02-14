import { FC, memo } from 'react';
import styled from 'styled-components';
import { useScroll } from '../../../hooks/useScroll';
import { QUESTIONS } from '../../../lib/questions';
import { StyledAbout, scrollReveal } from '../../../styles';
import { Toggle } from '../../ui';

// -> AboutUs page

const FAQ: FC = () => {
  const { element, controls } = useScroll();
  return (
    <StyledFAQ
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      {QUESTIONS.map((q) => (
        <Toggle key={q.title} title={q.title}>
          <div className="answer">
            <p>{q.answer1}</p>
            <p>{q.answer2}</p>
          </div>
        </Toggle>
      ))}
    </StyledFAQ>
  );
};

// Styles
const StyledFAQ = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export default memo(FAQ);
