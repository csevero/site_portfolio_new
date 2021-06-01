import { motion } from 'framer-motion'
import styled from 'styled-components'

interface IButtonProps {
  width?: string
  backgroundColor?: string
}

export const ButtonCustom = styled(motion.a)<IButtonProps>`
  width: ${props => props.width || '160px'};
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  padding: 13px 0;
  font-size: 20px;
  color: ${props => props.theme.colors.white};
  background: ${props => props.backgroundColor || props.theme.colors.blue_2};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  }

  &:active {
    filter: brightness(0.8);
  }
`
