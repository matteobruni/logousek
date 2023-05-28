import React from 'react'
import { signOut } from 'next-auth/react'

import ClickableIcon from '@components/clickable-icon'
import ClickableIconWrapper from '@components/clickable-icon-wrapper'
import DarkModeSwitch from '@components/dark-mode-switch'

import * as S from './styled'


const Icons: React.FC = () => {
  const _onLogoutHandler = () => {
    signOut()
  }

  return (
    <ClickableIconWrapper key="game-menu-icons">
      <S.DarkModeSwitchWrapper>
        <DarkModeSwitch />
      </S.DarkModeSwitchWrapper>
      <ClickableIcon icon="logout" onClick={_onLogoutHandler} />
    </ClickableIconWrapper>
  )
}

export default Icons
