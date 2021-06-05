import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .main-gif {
    display: initial;
  }

  @media (max-width: 800px) {
    height: 80vh;
    flex-direction: column-reverse;
    align-items: center;

    .main-gif {
      display: none;
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
