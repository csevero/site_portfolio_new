import { useRouter } from 'next/router'
import React from 'react'
import ReactFlagsSelect from 'react-flags-select'
import { getLanguage } from '../../helpers/getLanguage'
import ActiveLink from './Link'
import { HeaderWrapper } from './style'

export const Header: React.FC = () => {
  const router = useRouter()
  const translate = getLanguage()

  function handleChangeLocale(locale: string) {
    router.push(router.pathname, null, {
      locale: locale === 'US' ? 'en' : 'pt-BR'
    })
  }

  return (
    <HeaderWrapper>
      <ActiveLink href="/">{translate.navbar.home}</ActiveLink>
      <ActiveLink href="/about">{translate.navbar.about}</ActiveLink>
      <ActiveLink href="/projects">{translate.navbar.projects}</ActiveLink>
      <ActiveLink href="/contact">{translate.navbar.contact}</ActiveLink>
      {
        // TODO add a mobile menu
      }
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
    </HeaderWrapper>
  )
}
