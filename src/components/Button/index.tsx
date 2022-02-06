import React from 'react'
import Link from 'next/link'
import { ButtonCustom } from './style'
interface IButtonProps {
  backgroundColor?: string
  width?: string
  prefetch?: boolean
  link: string
}

export const ButtonLink: React.FC<IButtonProps> = ({
  children,
  backgroundColor,
  width,
  prefetch,
  link,
  ...rest
}) => (
  <Link href={link} passHref prefetch={prefetch}>
    <ButtonCustom backgroundColor={backgroundColor} width={width} {...rest}>
      {children}
    </ButtonCustom>
  </Link>
)
