import { motion } from 'framer-motion';
import { FC, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// -> App

const Nav: FC = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <h1>
        <Link to="/" id="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <Line
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '50%' : '0%' }}
            transition={{ duration: 0.75 }}
          />
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <Line
            initial={{ width: '0%' }}
            animate={{ width: pathname.includes('/work') ? '50%' : '0%' }}
            transition={{ duration: 0.75 }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <Line
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
            transition={{ duration: 0.75 }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

// Style
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 100;

  a {
    color: #fff;
    text-decoration: none;
  }
  ul {
    display: flex;
  }
  li {
    padding-left: 10rem;
    position: relative;
    list-style-type: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
  @media (max-width: 1500px) {
    flex-direction: column;
    padding: 2rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 5%;
  position: absolute;
  bottom: -80%;
  left: 60%;

  @media (max-width: 1500px) {
    left: 0;
  }
`;

export default memo(Nav);
