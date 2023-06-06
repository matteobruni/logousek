import React, { useState, useEffect } from 'react'

import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import { FIELDS } from '../login-form'

import LoginForm from '../login-form';

type RegisterUserFormProps = {
    onFormFilledHandler: (data: FormValues) => void
}

export type FormValues = {
    firstName: string
    surName: string
    nickName: string
    password: string
}

const RegisterUserForm: React.FC<RegisterUserFormProps> = ({ onFormFilledHandler }) => {
    const { tCommon } = useTranslateFunctions()
    const [, forceUpdate] = useState({});

    useEffect(() => {
        forceUpdate({});
    }, []);

    const handleSubmit = (values: FormValues) => {
        onFormFilledHandler(values)
    }

    return (
        <LoginForm
            onFormFilledHandler={handleSubmit}
            fields={FIELDS}
            name="RegisterForm"
            buttonName={tCommon('buttons.create')}
        />
    )
}

export default RegisterUserForm
