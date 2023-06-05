import React from 'react'

import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import { FIELDS } from '@hooks/useLoginFields'

import LoginForm from '../login-form'

type LoginUserType = {
  onFormFilledHandler: ({
    nickName,
    password,
  }: {
    nickName: string
    password: string
  }) => void
}

type FormValues = { nickName: string; password: string }

const LoginUser: React.FC<LoginUserType> = ({ onFormFilledHandler }) => {
  const { tCommon } = useTranslateFunctions()

  const handleSubmit = (values: FormValues) => {
    onFormFilledHandler({
      nickName: values.nickName,
      password: values.password,
    })
  }

  return (
    <LoginForm
      onFormFilledHandler={handleSubmit}
      fields={{
        nickName: FIELDS.nickName,
        password: FIELDS.password
      }}
      name="LoginForm"
      buttonName={tCommon('buttons.send')}
    />)
}

export default LoginUser
