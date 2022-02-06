import styled from 'styled-components'
import { WrapperStyleCSS } from '../commonStyles'

export const Wrapper = styled.div`
  ${WrapperStyleCSS}

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;

    button {
      @media (min-width: 768px) {
        width: 100%;
      }
    }
  }
`
