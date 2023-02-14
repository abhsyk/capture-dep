import { FC, memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Movie } from '../../interfaces/Movie';
import { MOVIES } from '../../lib/movies';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../styles';
import { ScrollTop } from '../../components/ui';

const MovieDetail: FC = () => {
  const params = useParams<{ slug: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(MOVIES.find((movie) => movie.slug === params.slug)!);
  }, [params.slug]);

  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <div key={award.title} className="award">
                <h3>{award.title}</h3>
                <div className="line" />
                <p>{award.description}</p>
              </div>
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="" />
          </ImageDisplay>
          <ScrollTop />
        </Details>
      )}
    </>
  );
};

// Styles
const Details = styled(motion.div)`
  color: #fff;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;

  .award {
    padding: 5rem;
    h3 {
      font-size: 2rem;
    }
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
  }

  @media (max-width: 1500px) {
    display: block;
    margin: 2rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default memo(MovieDetail);
