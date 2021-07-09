import React from 'react'
import Link from 'next/link'
import { ButtonCustom } from '../../styles/commonStyles'
interface IButtonProps {
  backgroundColor?: string
  width?: string
  link: string
}

export const Button: React.FC<IButtonProps> = ({
  children,
  backgroundColor,
  width,
  link,
  ...rest
}) => (
  <Link href={link} passHref prefetch>
    <ButtonCustom backgroundColor={backgroundColor} width={width} {...rest}>
      {children}
    </ButtonCustom>
  </Link>
)
