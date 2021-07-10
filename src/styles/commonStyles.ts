import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

interface IButtonProps {
  width?: string
  backgroundColor?: string
}

export const Container = styled.div`
  width: 100vw;
  max-width: 90vw;

  margin: 50px auto 0;
  padding: 0 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    padding: 0;
    margin-top: 30px;
  }
`

export const ButtonStyleCSS = css<IButtonProps>`
  width: ${props => (props.width ? props.width : '')};
  text-decoration: none;
  border-radius: 10px;
  font-weight: 700;
  padding: 10px 25px;
  border: none;
  font-size: 18px;
  color: ${props => props.theme.colors.white};
  background: ${props => props.backgroundColor || props.theme.colors.blue_2};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover,
  &:active {
    filter: brightness(0.8);
  }
`

export const AnchorStyleCSS = css`
  text-decoration: none;
  color: initial;
  animation: pulse-text 2s ease-in-out infinite alternate;
  position: relative;

  &::after {
    content: '';
    width: 0;
    height: 1px;
    background: ${props => props.theme.colors.blue_1};
    position: absolute;
    left: 0;
    bottom: 0;
    transition: all 0.2s;
  }

  &:hover {
    &::after {
      width: 100%;
      transition: all 0.4s;
    }
  }

  @keyframes pulse-text {
    to {
      color: ${props => props.theme.colors.black_2};
    }
    from {
      color: ${props => props.theme.colors.blue_1};
    }
  }
`
