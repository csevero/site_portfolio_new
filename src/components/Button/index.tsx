import React from 'react'
import { ButtonCustom } from './style'
import Link from 'next/link'

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
    <ButtonCustom
      backgroundColor={backgroundColor}
      width={width}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      {...rest}
    >
      {children}
    </ButtonCustom>
  </Link>
)
