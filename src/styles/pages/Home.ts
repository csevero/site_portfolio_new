import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled(motion.div)`
  width: 100%;
  height: calc(100vh - 10rem);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  .main-gif {
    display: initial;
  }

  .view-count {
    position: fixed;
    bottom: 0;
    margin-bottom: 6rem;
  }

  @media (max-width: 800px) {
    height: 80vh;
    flex-direction: column-reverse;
    align-items: center;

    .main-gif {
      display: none;
    }

    .view-count {
      position: fixed;
      bottom: 0;
      margin-bottom: 1rem;
    }
  }
`

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 10px;
  }

  h1 {
    max-width: 300px;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 20px;
  }

  .social-networks {
    display: flex;
    align-items: center;
    margin-top: 120px;

    a {
      margin: 0 15px;
    }

    svg {
      width: 35px;
      height: 35px;
      transition: all 0.2s;

      &:hover {
        transform: translate3d(0, -5px, 0);
      }
    }
  }

  @media (max-width: 800px) {
    .social-networks {
      margin-top: 100px;
    }
  }
`
