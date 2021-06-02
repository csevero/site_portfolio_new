import React, { AnchorHTMLAttributes } from 'react'

import { ButtonCustom } from './style'

interface IButtonProps {
  backgroundColor?: string
}

export const Button: React.FC<IButtonProps> = ({
  children,
  backgroundColor,
  ...rest
}) => (
  <ButtonCustom backgroundColor={backgroundColor} {...rest}>
    {children}
  </ButtonCustom>
)
