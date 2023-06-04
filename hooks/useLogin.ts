import { useContext } from 'react'
import { signIn } from 'next-auth/react'
import axios, { AxiosError } from 'axios'
import { message } from 'antd'
import { MessageInstance } from 'antd/es/message/interface'


import ModalContext from '@contexts/modal-context'



export const useLogin = (messageApi: MessageInstance) => {
    const modalContext = useContext(ModalContext)

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
                        content: 'Úspěšně přihlášeno',
                    })
                } else {
                    messageApi.open({
                        type: 'error',
                        content:
                            result?.error === 'wrong_password'
                                ? 'Špatné heslo'
                                : 'Uživatele se nepovedlo přihlásit',
                    })
                }
            } catch (error) {
                messageApi.open({
                    type: 'error',
                    content: 'Uživatele se nepovedlo přihlásit',
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
                const res2 = await axios.post('/api/user/register', {
                    params: { firstName, surName, nickName, password },
                })

                if (res2.status === 200) {
                    messageApi.open({
                        type: 'success',
                        content: 'Uživatel byl vytvořen. Přihlaste se',
                    })

                    modalContext?.closeModal()
                }
            } catch (error) {
                const axiosError = error as AxiosError<{ errorCode: 'string' }>
                const errorCode: string = axiosError?.response?.data?.errorCode || ''
                if (errorCode === 'user_exists') {
                    messageApi.open({
                        type: 'error',
                        content: 'Tohoto uživatele tu už máme',
                    })
                } else {
                    messageApi.open({
                        type: 'error',
                        content: 'Neznámá chyba při vytváření',
                    })
                }
            }
        }
        register()
    }

    const onLoginGuessHandler = ({ nickName }: { nickName: string }) => { }
    return { onLogin, onRegister, onLoginGuessHandler }
};