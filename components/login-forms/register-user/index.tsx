import React, { useContext } from 'react'
import {
    LoginModalWrapper
} from './styled'
import Button, { ButtonSizesEnum } from '../../button/index'
import ButtonRow from '../../button-row/button-row'
import { ThemeContext } from 'styled-components'
import { Form, Input } from 'antd'

type LoginUserType = {
    onFormFilledHandler: (data: FormValues) => void
}

type FormValues = {
    firstName: string;
    surName: string;
    nickName: string;
    password: string;
}

const RegisterUser: React.FC<LoginUserType> = ({ onFormFilledHandler }) => {
    const themeContextData = useContext(ThemeContext)

    const handleSubmit = (values: FormValues) => {
        onFormFilledHandler(values)
    }
    return (
        <LoginModalWrapper>
            <Form<FormValues>
                name="RegisterForm"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
                style={{ width: "100%", padding: "1rem 2rem 0rem 2rem" }}
                autoComplete="off"
            >
                <Form.Item
                    label="firstName"
                    name="firstName"
                    rules={[{ required: true, message: 'Zadejte prosím své jméno!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="surName"
                    name="surName"
                    rules={[{ required: true, message: 'Zadejte prosím své jméno!' }]}
                >
                    <Input />
                </Form.Item>
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
                        Vytvořit
                    </Button>
                </ButtonRow>
            </Form>
        </LoginModalWrapper>
    )
}

export default RegisterUser
