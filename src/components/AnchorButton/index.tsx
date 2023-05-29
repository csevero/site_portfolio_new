import React, { AnchorHTMLAttributes } from 'react'

interface IAnchorButton extends AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string
  title?: string
}

export const AnchorButton: React.FC<IAnchorButton> = ({
  link,
  title,
  children,
  ...rest
}) => {
  return (
    <a rel="noreferrer noopener" target="_blank" href={link} title={title} {...rest}>
      {children}
    </a>
  )
}
