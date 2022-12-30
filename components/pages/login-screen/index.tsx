import React, { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Button from '../../button'
import RouteWrapper from '../../route-wrapper'
import { useRouter } from 'next/router'
import { setNewUser } from '../../../helpers/local-storage-helper'
import ModalContext from '../../../contexts/modal-context'
import LoginModal from '../../login-modal'
import { ThemeContext } from 'styled-components'
import * as S from "./styled"

type LoginScreenType = {}

const LoginScreen: React.FC<LoginScreenType> = () => {
  const router = useRouter()
  const modalContext = useContext(ModalContext)
  const themeContext = useContext(ThemeContext)

  const redirectToMenu = (userName: any) => {
    setNewUser(userName)
    modalContext?.closeModal()
    router.push('/game-menu')
  }

  const _loginAsGuess = () => {
    modalContext?.showModal({
      content: <LoginModal onFormFilledHandler={redirectToMenu} />,
      header: 'Vytváření nového uživatele'
    })
  }

  return (
    <RouteWrapper colorScheme={themeContext?.colors.primary}>
      <Head>
        <title>Logoušek - login</title>
      </Head>
      <S.LoginWrapper>
        <S.LoginButtonsWrapper>
          <Button onClick={() => { }} disabled>Přihlásit Facebookem</Button>
          <Button onClick={() => { }} disabled>Přihlásit Google účtem</Button>
          <Button onClick={_loginAsGuess}>Přihlásit Host</Button>
        </S.LoginButtonsWrapper>
        <S.Footer>
          <span>Jetště nemáte účet?</span>
          <span>
            <Link href="/register">Registrovat se</Link>
          </span>
        </S.Footer>
      </S.LoginWrapper>
    </RouteWrapper>
  )
}

export default LoginScreen
