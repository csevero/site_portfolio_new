import React, { AnchorHTMLAttributes } from 'react'

interface IAnchorButton extends AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string
}
export const AnchorButton: React.FC<IAnchorButton> = ({
  link,
  children,
  ...rest
}) => {
  return (
    <a rel="noreferrer noopener" target="_blank" href={link} {...rest}>
      {children}
    </a>
  )
}
