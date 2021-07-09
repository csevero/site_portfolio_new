import styled from 'styled-components'
import { AnchorStyleCSS } from '../commonStyles'

export const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 10rem);
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 800px) {
    height: 80vh;
    .main-gif {
      display: none;
    }
  }
`

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 10px;
  }

  h2 {
    font-weight: 500;
    max-width: 400px;
  }

  span {
    font-weight: 500;
    font-size: 20px;
    margin-top: 20px;
  }

  a {
    ${AnchorStyleCSS}

    &:hover {
      &::after {
        width: 0;
      }
    }
  }

  .social-networks {
    margin-top: 20px;

    .links {
      display: flex;
      align-items: center;
      margin-top: 10px;

      a {
        width: 35px;
        height: 35px;
        margin: 0 10px;

        svg {
          width: 35px;
          height: 35px;
        }

        &:first-of-type {
          margin-left: 0;
        }
      }
    }
  }
`
