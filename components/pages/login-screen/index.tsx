import React, { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Button from '../../button'
import RouteWrapper from '../../route-wrapper'
import { useRouter } from 'next/router'
import { setNewUser } from '../../../helpers/local-storage-helper'
import ModalContext from '../../../contexts/modal-context'
import LoginHost from '@components/login-forms/login-host'
import LoginUser from '@components/login-forms/login-user'
import { ThemeContext } from 'styled-components'
import * as S from "./styled"


const LoginScreen: React.FC = () => {
  const router = useRouter()
  const modalContext = useContext(ModalContext)
  const themeContext = useContext(ThemeContext)

  const redirectToMenu = (userName: string) => {
    setNewUser(userName)
    modalContext?.closeModal()
    router.push('/game-menu')
  }

  const onLoginHandler = ({ userName, password }: { userName: string, password: string }) => {

  }

  const onLoginGuessHandler = ({ userName }: { userName: string }) => {

  }

  const _loginAsGuess = () => {
    modalContext?.showModal({
      autoWidth: true,
      content: <LoginHost onFormFilledHandler={onLoginGuessHandler} />,
      header: 'Přihlášení hosta'
    })
  }

  const _loginAsUser = () => {
    modalContext?.showModal({
      autoWidth: true,
      content: <LoginUser onFormFilledHandler={onLoginHandler} />,
      header: 'Přihlášení uživatele'
    })
  }

  const _loginAsAdmin = () => {
    modalContext?.showModal({
      autoWidth: true,
      content: <LoginUser onFormFilledHandler={onLoginHandler} />,
      header: 'Přihlášení admina'
    })
  }

  return (
    <RouteWrapper colorScheme={themeContext?.colors.primary}>
      <Head>
        <title>Logoušek - login</title>
      </Head>
      <S.LoginWrapper>
        <S.LoginButtonsWrapper>
          <Button onClick={_loginAsAdmin}>Přihlásit Admina</Button>
          <Button onClick={_loginAsUser}>Přihlásit Uživatele</Button>
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
