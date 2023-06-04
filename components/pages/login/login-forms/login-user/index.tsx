import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Form, Input } from 'antd'

import Button, { ButtonSizesEnum } from '@components/button/index'
import ButtonRow from '@components/button-row/button-row'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import * as S from './styled'

type LoginUserType = {
  onFormFilledHandler: ({ nickName, password }: { nickName: string, password: string }) => void
}

type FormValues = { nickName: string, password: string }

const LoginUser: React.FC<LoginUserType> = ({ onFormFilledHandler }) => {
  const themeContextData = useContext(ThemeContext)
  const { tCommon } = useTranslateFunctions()

  const handleSubmit = (values: FormValues) => {
    onFormFilledHandler({ nickName: values.nickName, password: values.password })
  }

  return (
    <S.LoginModalWrapper>
      <S.StyledForm
        name="LoginForm"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="nickName"
          name="nickName"
          rules={[{ required: true, message: 'Zadejte prosím své jméno!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Zadejte prosím heslo!' }]}
        >
          <Input.Password />
        </Form.Item>
        <ButtonRow>
          <Button
            type="submit"
            color="#fff"
            size={ButtonSizesEnum.xs}
            backgroundColor={themeContextData?.colors?.tertiary}
          >
            {tCommon("buttons.send")}
          </Button>
        </ButtonRow>
      </S.StyledForm>
    </S.LoginModalWrapper>
  )
}

export default LoginUser
