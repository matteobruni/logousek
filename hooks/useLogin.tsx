import { useContext } from 'react'
import { signIn } from 'next-auth/react'
import { AxiosError } from 'axios'
import { MessageInstance } from 'antd/es/message/interface'

import ModalContext from '@contexts/modal-context'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import Loading from '@components/loading'
import { registerCall } from 'calls/login-page-calls'



export const useLogin = (messageApi: MessageInstance) => {
    const modalContext = useContext(ModalContext)
    const { tLogin } = useTranslateFunctions()

    const onLogin = ({
        nickName,
        password,
    }: {
        nickName: string
        password: string
    }) => {
        const callApi = async () => {
            try {
                const result = await signIn('credentials', {
                    nickName,
                    password,
                    redirect: false,
                })
                if (result?.ok) {
                    messageApi.open({
                        type: 'success',
                        content: tLogin("messages.success.successfullyLoggedIn"),
                    })
                } else {
                    messageApi.open({
                        type: 'error',
                        content:
                            result?.error === 'wrong_password'
                                ? tLogin("messages.error.unknown")
                                : tLogin("messages.error.unknown"),
                    })
                }
            } catch (error) {
                messageApi.open({
                    type: 'error',
                    content: tLogin("messages.error.unknown"),
                })
            }
        }

        callApi()
        modalContext?.closeModal()
    }

    const onRegister = ({
        firstName,
        surName,
        nickName,
        password,
    }: {
        firstName: string
        surName: string
        nickName: string
        password: string
    }) => {
        const register = async () => {
            try {
                const result = await registerCall(firstName, surName, nickName, password)

                if (result.status === 200) {
                    messageApi.open({
                        type: 'success',
                        content: tLogin("messages.success.successfullyRegistred"),
                    })

                    modalContext?.showModal({
                        content: <Loading textType="primary" />,
                        closeDisabled: true,
                        onOkClick: undefined,
                        onStornoClick: undefined,
                        autoWidth: true
                    })

                    setTimeout(() => onLogin({ nickName, password }), 2000)
                }
            } catch (error) {
                const axiosError = error as AxiosError<{ errorCode: 'string' }>
                const errorCode: string = axiosError?.response?.data?.errorCode || ''
                if (errorCode === 'user_exists') {
                    messageApi.open({
                        type: 'error',
                        content: tLogin("messages.error.userAlreadyExists"),
                    })
                } else {
                    messageApi.open({
                        type: 'error',
                        content: tLogin("messages.error.unknown"),
                    })
                }
            }
        }
        register()
    }

    const onLoginGuessHandler = ({ nickName }: { nickName: string }) => { }
    return { onLogin, onRegister, onLoginGuessHandler }
};