import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'
import { getLanguage } from '../../helpers/getLanguage'
import { ToggleThemeButton } from '../ToggleThemeButton'
import ActiveLink from './Link'
import { HeaderWrapper } from './style'

export const Header: React.FC = () => {
  const [activeMenuMobile, setActiveMenuMobile] = useState('')
  const [bxActive, setBxActive] = useState('')
  const router = useRouter()
  const translate = getLanguage()

  useEffect(() => {
    setActiveMenuMobile('')
    setBxActive('')
  }, [router.pathname])

  function handleChangeLocale(locale: string) {
    router.push(router.pathname, null, {
      locale: locale === 'US' ? 'en' : 'pt-BR'
    })
  }

  const MenuContent = () => {
    return (
      <>
        <ActiveLink href="/">{translate.navbar.home}</ActiveLink>
        <ActiveLink href="/about">{translate.navbar.about}</ActiveLink>
        <ActiveLink href="/projects">{translate.navbar.projects}</ActiveLink>
        <ActiveLink href="/contact">{translate.navbar.contact}</ActiveLink>
        <ReactFlagsSelect
          countries={['US', 'BR']}
          customLabels={{
            US: 'English',
            BR: 'Português'
          }}
          showOptionLabel={false}
          showSelectedLabel={false}
          selected={router.locale === 'en' ? 'US' : 'BR'}
          onSelect={code => handleChangeLocale(code)}
        />
        <ToggleThemeButton />
      </>
    )
  }

  return (
    <HeaderWrapper>
      <nav className="navbar-desktop">
        <MenuContent />
      </nav>
      <nav className="navbar-mobile">
        <div
          className={`bx ${bxActive}`}
          onClick={() => {
            setActiveMenuMobile(prev =>
              prev === '' ? 'active-menu-mobile' : ''
            )
            setBxActive(prev => (prev === '' ? 'bx-active' : ''))
          }}
        ></div>
      </nav>

      <nav className={`menu-mobile ${activeMenuMobile}`}>
        <MenuContent />
      </nav>
    </HeaderWrapper>
  )
}
