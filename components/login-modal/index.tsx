import React, { useState } from 'react'
import {
  LoginModalWrapper,
  LoginModalForm,
  CustomInput,
  LabelWithInput,
  CustomLabel,
} from './styled'
import Button, { ButtonSizesEnum } from '../button/index'
import ButtonRow from '../button-row/button-row'

type LoginModalType = { onFormFilledHandler: (name: string) => void }

const LoginModal: React.FC<LoginModalType> = ({ onFormFilledHandler }) => {
  const [userName, setUserName] = useState('')
  const _generateRandomName = () => {
    setUserName(`Guest${Math.round(Math.random() * 9999)}`)
  }

  const _onUserNameChangehandler = (event: { target: { value: string } }) => {
    setUserName(event.target.value)
  }

  const _send = () => {
    onFormFilledHandler(userName)
  }
  return (
    <LoginModalWrapper>
      <LoginModalForm
      >
        <LabelWithInput>
          <CustomLabel>Jméno:</CustomLabel>
          <CustomInput
            type="text"
            value={userName}
            onChange={_onUserNameChangehandler}
          />
        </LabelWithInput>
        <ButtonRow>
          <Button
            onClick={_generateRandomName}
            color="green"
            size={ButtonSizesEnum.xs}
          >
            Generovat jméno
          </Button>
          <Button onClick={_send} color="green" size={ButtonSizesEnum.xs}>
            Vytvořit
          </Button>
        </ButtonRow>
      </LoginModalForm>
    </LoginModalWrapper>
  )
}

export default LoginModal