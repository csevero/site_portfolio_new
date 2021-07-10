import { motion } from 'framer-motion'
import styled from 'styled-components'
import { ButtonStyleCSS } from '../commonStyles'

export const Wrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;

  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .button {
    display: flex;
    justify-content: center;
    margin: 20px 0;

    a {
      ${ButtonStyleCSS}
    }
  }
`
