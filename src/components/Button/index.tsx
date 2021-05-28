import React, { AnchorHTMLAttributes } from 'react'

import { ButtonCustom } from './style'

interface IButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  backgroundColor?: string
}

export const Button: React.FC<IButtonProps> = ({
  children,
  backgroundColor,
  ...rest
}) => {
  return (
    <ButtonCustom backgroundColor={backgroundColor} {...rest}>
      {children}
    </ButtonCustom>
  )
}
