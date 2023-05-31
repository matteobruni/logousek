import React, { useContext } from 'react'
import Head from 'next/head'
import Button from '../../button'
import RouteWrapper from '../../route-wrapper'
import ModalContext from '../../../contexts/modal-context'
import LoginHost from '@components/login-forms/login-host'
import LoginUser from '@components/login-forms/login-user'
import RegisterUser from '@components/login-forms/register-user'
import { ThemeContext } from 'styled-components'
import { signIn } from 'next-auth/react'
import * as S from './styled'
import axios, { AxiosError } from 'axios'
import { message } from 'antd'

const Login: React.FC = () => {
  const modalContext = useContext(ModalContext)
  const themeContext = useContext(ThemeContext)
  const [messageApi, contextHolder] = message.useMessage()

  const onLoginHandler = ({
    nickName,
    password,
  }: {
    nickName: string
    password: string
  }) => {
    const callApi = async () => {
      try {
        const result = await signIn('credentials', {
          nickName,
          password,
          redirect: false,
        })
        if (result?.ok) {
          messageApi.open({
            type: 'success',
            content: 'Úspěšně přihlášeno',
          })
        } else {
          messageApi.open({
            type: 'error',
            content:
              result?.error === 'wrong_password'
                ? 'Špatné heslo'
                : 'Uživatele se nepovedlo přihlásit',
          })
        }
      } catch (error) {
        messageApi.open({
          type: 'error',
          content: 'Uživatele se nepovedlo přihlásit',
        })
      }
    }

    callApi()
    modalContext?.closeModal()
  }

  const onRegisterHandler = ({
    firstName,
    surName,
    nickName,
    password,
  }: {
    firstName: string
    surName: string
    nickName: string
    password: string
  }) => {
    const register = async () => {
      try {
        const res2 = await axios.post('/api/user/register', {
          params: { firstName, surName, nickName, password },
        })

        if (res2.status === 200) {
          messageApi.open({
            type: 'success',
            content: 'Uživatel byl vytvořen. Přihlaste se',
          })

          modalContext?.closeModal()
        }
      } catch (error) {
        const axiosError = error as AxiosError<{ errorCode: 'string' }>
        const errorCode: string = axiosError?.response?.data?.errorCode || ''
        console.log('errorCode', errorCode)
        if (errorCode === 'user_exists') {
          messageApi.open({
            type: 'error',
            content: 'Tohoto uživatele tu už máme',
          })
        } else {
          messageApi.open({
            type: 'error',
            content: 'Neznámá chyba při vytváření',
          })
        }
      }
    }
    register()
  }

  const onLoginGuessHandler = ({ nickName }: { nickName: string }) => { }

  const _loginAsGuess = () => {
    modalContext?.showModal({
      autoWidth: true,
      content: <LoginHost onFormFilledHandler={onLoginGuessHandler} />,
      header: 'Přihlášení hosta',
    })
  }

  const _loginAsUser = () => {
    modalContext?.showModal({
      autoWidth: true,
      content: <LoginUser onFormFilledHandler={onLoginHandler} />,
      header: 'Přihlášení uživatele',
    })
  }

  const _loginAsAdmin = () => {
    modalContext?.showModal({
      autoWidth: true,
      content: <LoginUser onFormFilledHandler={onLoginHandler} />,
      header: 'Přihlášení admina',
    })
  }

  const _register = () => {
    modalContext?.showModal({
      autoWidth: true,
      content: <RegisterUser onFormFilledHandler={onRegisterHandler} />,
      header: 'Registrace uživatele',
    })
  }

  return (
    <RouteWrapper colorScheme={themeContext?.colors.primary} title={"Logoušek - login"} type="onlyPublic">
      {contextHolder}
      <Head>
        <title>Logoušek - login</title>
      </Head>
      <S.LoginWrapper>
        <S.Header>
          <span>Jetště nemáte účet?</span>
          <S.Link onClick={_register}>Registrovat se</S.Link>
        </S.Header>
        <S.LoginButtonsWrapper>
          <Button onClick={_loginAsAdmin}>Přihlásit Admina</Button>
          <Button onClick={_loginAsUser}>Přihlásit Uživatele</Button>
          {/* <Button onClick={() => signIn("credentials", { email: "SDA", password: "DSADSA", redirect: false })}>Přihlásit Host</Button> */}
          <Button onClick={_loginAsGuess} disabled>
            Přihlásit Host
          </Button>
        </S.LoginButtonsWrapper>
      </S.LoginWrapper>
    </RouteWrapper>
  )
}

export default Login
