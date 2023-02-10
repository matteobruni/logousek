import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import HeaderWrapper from '@components/header-wrapper/header-wrapper'
import ClickableIcon from '@components/clickable-icon'
import ClickableIconWrapper from '@components/clickable-icon-wrapper'
import { logoutUser } from '@helpers/local-storage-helper'
import ModalContext from '@contexts/modal-context'
import DarkModeSwitch from '@components/dark-mode-switch'
import { signOut } from 'next-auth/react'
import * as S from './styled'

type GameMenuHeaderType = { points: number, userName: string }

const GameMenuHeader: React.FC<GameMenuHeaderType> = ({ points, userName }) => {
  const modalContext = useContext(ModalContext)
  const _onLogoutHandler = () => {
    signOut()
  }

  const _showSettings = () => {
    modalContext?.showModal({
      content: <div></div>,
      header: 'Nastavení'
    })
  }

  const menuItems = [
    <S.User key="game-menu-user">
      <S.UserPhoto></S.UserPhoto>
      <S.UserName>{userName}</S.UserName>
    </S.User>,
    <S.CashContainer key="game-menu-coins">
      <S.CashWrapper>12h 30m |<S.Icon className={'material-icons'}>payments</S.Icon>{points || 0}</S.CashWrapper>
    </S.CashContainer>,
    <ClickableIconWrapper key="game-menu-icons">
      <S.DarkModeSwitchWrapper>
        <DarkModeSwitch />
      </S.DarkModeSwitchWrapper>
      <ClickableIcon icon="logout" onClick={_onLogoutHandler} />
      <ClickableIcon icon="settings" onClick={_showSettings} />
    </ClickableIconWrapper>
  ]

  return <HeaderWrapper>{menuItems}</HeaderWrapper>
}

export default GameMenuHeader
