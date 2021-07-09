import React from 'react'

interface IAnchorButton {
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
