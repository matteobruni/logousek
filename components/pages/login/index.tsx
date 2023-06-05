import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { message } from 'antd'

import { useLogin } from '@hooks/useLogin'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import { P5 } from '@components/typography/paragraph'

import Button from '../../button'
import RouteWrapper from '../../route-wrapper'
import ModalContext from '../../../contexts/modal-context'
import LoginHost from './login-forms/login-host'
import LoginUser from './login-forms/login-user'
import RegisterUser from './login-forms/register-user'
import * as S from './styled'

const Login: React.FC = () => {
  const modalContext = useContext(ModalContext)
  const [messageApi, contextHolder] = message.useMessage();

  const { tLogin } = useTranslateFunctions()
  const themeContext = useContext(ThemeContext)
  const { onLogin, onRegister, onLoginGuessHandler } = useLogin(messageApi)

  const loginAsGuess = () => {
    modalContext?.showModal({
      autoWidth: true,
      content: <LoginHost onFormFilledHandler={onLoginGuessHandler} />,
      header: tLogin("modals.loginGuess.title"),
    })
  }

  const loginAsUser = () => {
    modalContext?.showModal({
      autoWidth: true,
      content: <LoginUser onFormFilledHandler={onLogin} />,
      header: tLogin("modals.loginUser.title"),
    })
  }

  const register = () => {
    modalContext?.showModal({
      autoWidth: true,
      content: <RegisterUser onFormFilledHandler={onRegister} />,
      header: tLogin("modals.registerUser.title"),
    })
  }

  return (
    <RouteWrapper
      colorScheme={themeContext?.colors.primary}
      title={tLogin("title")}
      type="onlyPublic"
    >
      {contextHolder}
      <S.LoginWrapper>
        <S.Header>
          <P5 margin='0'>{tLogin("register.haveNotAnAccountYet")}</P5>
          <S.Link margin='0' onClick={register}>{tLogin("register.register")}</S.Link>
        </S.Header>
        <S.LoginButtonsWrapper>
          <Button onClick={loginAsUser}>{tLogin("loginButtons.userLogin")}</Button>
          <Button onClick={loginAsGuess}>{tLogin("loginButtons.guessLogin")}</Button>
        </S.LoginButtonsWrapper>
      </S.LoginWrapper>
    </RouteWrapper>
  )
}

export default Login
