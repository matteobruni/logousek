import React from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import ClickableIcon from '@components/clickable-icon'
import ClickableIconWrapper from '@components/clickable-icon-wrapper'
import DarkModeSwitch from '@components/dark-mode-switch'
import routes from '@constants/routes'

import * as S from './styled'


const Icons: React.FC = () => {
  const router = useRouter()
  const sessionData = useSession()

  const onLogoutHandler = () => {
    signOut()
  }

  const onAdminPagesRedirect = () => {
    router.push({
      pathname: routes.adminPage,
    })
  }

  return (
    <ClickableIconWrapper key="game-menu-icons">
      <S.DarkModeSwitchWrapper>
        <DarkModeSwitch />
      </S.DarkModeSwitchWrapper>
      <ClickableIcon icon="logout" onClick={onLogoutHandler} />
      {(sessionData?.data?.user as any)?.role === "ADMIN" ? <ClickableIcon icon="poll" onClick={onAdminPagesRedirect} /> : <></>}
    </ClickableIconWrapper>
  )
}

export default Icons
