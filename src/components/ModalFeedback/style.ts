import { motion } from 'framer-motion'
import styled from 'styled-components'
import { ButtonStyleCSS } from '../../styles/commonStyles'

export const ModalMask = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 10;
`

export const ModalContent = styled.div`
  width: 50vw;
  background: ${props => props.theme.colors.white};
  position: relative;
  padding: 20px 35px;
  border-radius: 10px;
  z-index: 20;

  .close {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 15px;
    top: 15px;
    background: transparent;
    border: none;
    cursor: pointer;

    &::after,
    &::before {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;

      background: #000;
    }

    &::after {
      top: 50%;
      left: 0;
      transform: rotate(135deg);
    }

    &::before {
      top: 50%;
      left: 0;
      transform: rotate(-135deg);
    }
  }

  h1 {
    font-size: 22px;
  }

  span {
    font-size: 18px;
    margin: 10px 0;
    display: block;
  }

  @media (max-width: 800px) {
    width: 90vw;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  .input-block {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;

    label {
      font-size: 18px;
      font-weight: 500;
    }

    input {
      font-size: 16px;
      padding: 10px 15px;
      border-radius: 10px;
      margin-top: 5px;
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
  }

  button {
    ${ButtonStyleCSS}
  }
`
