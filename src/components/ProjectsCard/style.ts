import { motion } from 'framer-motion'
import styled from 'styled-components'
import { ButtonStyleCSS } from '../../styles/commonStyles'

interface IChangeColorButton {
  colorGreen?: boolean
}

export const CardContainer = styled.div`
  width: 350px;
  padding: 10px 20px;
  background: ${props => props.theme.colors.blue_3};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 10px;
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.5);
  margin: 10px;

  @media (max-width: 800px) {
    margin: 10px 0 10px 0;
  }

  h1 {
    font-weight: 500;
    font-size: 22px;
  }

  p {
    font-size: 16px;
    margin: 5px 0 10px;
    color: ${props => props.theme.colors.black_2};
  }

  svg {
    width: 40px;
    height: 40px;
    margin: 0 5px 10px 5px;

    &:first-of-type {
      margin-left: 0;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
`

export const Button = styled.a<IChangeColorButton>`
  ${ButtonStyleCSS}
  background: ${props => props.colorGreen && props.theme.colors.green};
  font-size: 16px;
`
