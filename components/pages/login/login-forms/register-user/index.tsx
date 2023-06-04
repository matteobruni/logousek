import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Form, Input } from 'antd'

import Button, { ButtonSizesEnum } from '@components/button/index'
import ButtonRow from '@components/button-row/button-row'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import { FIELDS } from '../..'
import * as S from './styled'

type LoginUserType = {
    onFormFilledHandler: (data: FormValues) => void
}

export type FormValues = {
    firstName: string
    surName: string
    nickName: string
    password: string
}

const RegisterUser: React.FC<LoginUserType> = ({ onFormFilledHandler }) => {
    const themeContextData = useContext(ThemeContext)
    const { tLogin, tCommon } = useTranslateFunctions()

    const handleSubmit = (values: FormValues) => {
        onFormFilledHandler(values)
    }

    return (
        <S.LoginModalWrapper>
            <S.StyledForm
                name="RegisterForm"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
                autoComplete="off"
            >
                {Object.values(FIELDS).map((field) => (
                    <Form.Item
                        key={`form_item_${field.name}`}
                        label={tLogin(`modals.registerUser.${field.name}`)}
                        name={field.name}
                        rules={[
                            {
                                required: true,
                                message: tLogin(`modals.registerUser.rules.${field.name}`),
                            },
                            {
                                min: field.minLength,
                                message: tLogin(
                                    `modals.registerUser.rules.insufficientLength`,
                                    { value: field.minLength }
                                ),
                            },
                            {
                                max: field.maxLength,
                                message: tLogin(`modals.registerUser.rules.moreThenMaxLength`, {
                                    value: field.maxLength,
                                }),
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                ))}

                <ButtonRow>
                    <Button
                        type="submit"
                        color={themeContextData.colors.white}
                        size={ButtonSizesEnum.xs}
                        backgroundColor={themeContextData?.colors?.tertiary}
                    >
                        {tCommon('buttons.create')}
                    </Button>
                </ButtonRow>
            </S.StyledForm>
        </S.LoginModalWrapper>
    )
}

export default RegisterUser
