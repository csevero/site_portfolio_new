import { useRouter } from 'next/dist/client/router'
import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'

interface ILinkProps extends LinkProps {
  activeClassName?: string
  children: ReactNode
}

const ActiveLink = ({ children, ...rest }: ILinkProps) => {
  const { asPath } = useRouter()

  const className = asPath === rest.href ? 'active' : ''

  return (
    <Link {...rest}>
      <a className={className || null}>{children}</a>
    </Link>
  )
}

export default ActiveLink
