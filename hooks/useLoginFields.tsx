import { Form, Input } from 'antd'

import { useTranslateFunctions } from '@hooks/useTranslateFunctions'


export type FieldsType = { [key: string]: { name: string, minLength: number, maxLength: number } }

export const FIELDS = {
    firstName: { name: 'firstName', minLength: 3, maxLength: 25 },
    surName: { name: 'surName', minLength: 4, maxLength: 25 },
    nickName: { name: 'nickName', minLength: 7, maxLength: 30 },
    password: { name: 'password', minLength: 10, maxLength: 35 },
}


export const useLoginFields = (fields: FieldsType) => {
    const { tLogin } = useTranslateFunctions()
    const result = Object.values(fields).map((field) => (
        <Form.Item
            key={`form_item_${field.name}`}
            label={tLogin(`modals.registerUser.${field.name}`)}
            name={field.name}
            rules={[
                {
                    required: true,
                    message: tLogin(`modals.registerUser.rules.notEntry.${field.name}`),
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
            {field.name === FIELDS.password.name ? <Input.Password /> : <Input />}
        </Form.Item>
    ))


    return result
};