import React from 'react'
import HeaderWrapper from '@components/header-wrapper/header-wrapper'
import ClickableIcon from '@components/clickable-icon'
import ClickableIconWrapper from '@components/clickable-icon-wrapper'
import DarkModeSwitch from '@components/dark-mode-switch'
import { signOut } from 'next-auth/react'
import * as S from './styled'

type GameMenuHeaderType = { points?: string, userName: string }

const GameMenuHeader: React.FC<GameMenuHeaderType> = ({ points, userName }) => {
  const _onLogoutHandler = () => {
    signOut()
  }

  const menuItems = [
    <S.User key="game-menu-user">
      <S.UserPhoto></S.UserPhoto>
      <S.UserName>{userName}</S.UserName>
    </S.User>,
    <S.CashContainer key="game-menu-coins">
      <S.CashWrapper><S.Icon className={'material-icons'}>payments</S.Icon><div>{points || 0}</div></S.CashWrapper>
    </S.CashContainer>,
    <ClickableIconWrapper key="game-menu-icons">
      <S.DarkModeSwitchWrapper>
        <DarkModeSwitch />
      </S.DarkModeSwitchWrapper>
      <ClickableIcon icon="logout" onClick={_onLogoutHandler} />
    </ClickableIconWrapper>
  ]

  return <HeaderWrapper>{menuItems}</HeaderWrapper>
}

export default GameMenuHeader
