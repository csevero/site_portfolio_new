import { motion } from 'framer-motion'
import styled from 'styled-components'
import { AnchorStyleCSS } from '../commonStyles'

export const Wrapper = styled(motion.div)`
  h1 {
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    justify-content: flex-start;
    padding: 0;
  }

  .about-infos {
    display: flex;
    align-items: center;

    img {
      width: 300px;
    }

    .infos {
      margin-left: 40px;
      max-width: 600px;

      span {
        font-weight: 700;
        font-size: 32px;
      }

      p {
        font-size: 18px;
        line-height: 25px;
        text-align: justify;
      }

      .link {
        display: block;
        font-weight: 400;
        font-size: 18px;
        margin: 8px 0;

        &:nth-of-type(1) {
          margin-top: 20px;
        }

        a {
          ${AnchorStyleCSS}
        }
      }
    }
  }

  @media (max-width: 800px) {
    .about-infos {
      flex-direction: column;
      .infos {
        margin: 10px 0;
      }
    }
  }
`
