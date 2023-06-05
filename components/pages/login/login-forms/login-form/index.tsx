import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext } from 'styled-components'
import { Form } from 'antd';

import Button, { ButtonSizesEnum } from '@components/button/index'
import ButtonRow from '@components/button-row/button-row'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import { FIELDS, FieldsType, useLoginFields } from '@hooks/useLoginFields'

import * as S from './styled'

type LoginUserType = {
    onFormFilledHandler: (data: FormValues) => void
    fields: FieldsType
    name: string
    buttonName: string
}

export type FormValues = {
    firstName: string
    surName: string
    nickName: string
    password: string
}

const LoginForm: React.FC<LoginUserType> = ({ onFormFilledHandler, fields, name, buttonName }) => {
    const [form] = Form.useForm();
    const themeContextData = useContext(ThemeContext)
    const loginFields = useLoginFields(fields)
    const [, forceUpdate] = useState({});

    useEffect(() => {
        forceUpdate({});
    }, []);

    const handleSubmit = (values: FormValues) => {
        onFormFilledHandler(values)
    }

    return (
        <S.LoginModalWrapper>
            <S.StyledForm
                form={form}
                name={name}
                layout="vertical"
                onFinish={handleSubmit}
                autoComplete="off"
            >
                {loginFields}
                <ButtonRow>
                    <Form.Item shouldUpdate>
                        {() => (
                            <Button
                                type="submit"
                                color={themeContextData.colors.white}
                                size={ButtonSizesEnum.xs}
                                backgroundColor={themeContextData?.colors?.tertiary}
                                disabled={
                                    !form.isFieldsTouched(true) ||
                                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                }
                            >
                                {buttonName}
                            </Button>)}
                    </Form.Item>
                </ButtonRow>
            </S.StyledForm>
        </S.LoginModalWrapper>
    )
}

export default LoginForm
