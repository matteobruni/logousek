import React, { useState, useEffect } from 'react'

import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import { FIELDS } from '@hooks/useLoginFields'

import LoginForm from '../login-form';

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

export default RegisterUser
