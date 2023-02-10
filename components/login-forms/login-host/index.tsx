import React, { useContext } from 'react'
import {
  LoginModalWrapper
} from './styled'
import Button, { ButtonSizesEnum } from '../../button/index'
import ButtonRow from '../../button-row/button-row'
import { ThemeContext } from 'styled-components'
import { Form, Input } from 'antd'

type LoginModalType = { onFormFilledHandler: ({ nickName }: { nickName: string }) => void }

type FormValues = { nickName: string }

const LoginModal: React.FC<LoginModalType> = ({ onFormFilledHandler }) => {
  const [form] = Form.useForm();
  const themeContextData = useContext(ThemeContext)
  const _generateRandomName = async () => {
    form.setFieldValue("nickName", `Guest${Math.round(Math.random() * 9999)}`)
  }

  const handleSubmit = (values: FormValues) => {
    onFormFilledHandler(values)
  }

  return (
    <LoginModalWrapper>
      <Form<FormValues>
        name="LoginForm"
        form={form}
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        style={{ width: "100%", padding: "1rem 2rem 0rem 2rem" }}
        autoComplete="off"
      >
        <Form.Item
          label="nickName"
          name="nickName"
          rules={[{ required: true, message: 'Zadejte prosím svůj login!' }]}
        >
          <Input />
        </Form.Item>
        <ButtonRow>
          <Button
            type="submit"
            color="#fff"
            size={ButtonSizesEnum.xs}
            backgroundColor={themeContextData?.colors?.tertiary}
          >
            Vytvořit
          </Button>
          <Button
            onClick={_generateRandomName}
            color="#fff"
            size={ButtonSizesEnum.xs}
            backgroundColor={themeContextData?.colors?.seventy}
          >
            Generovat jméno
          </Button>
        </ButtonRow>
      </Form>
    </LoginModalWrapper>
  )
}

export default LoginModal
