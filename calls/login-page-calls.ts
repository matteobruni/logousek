import { callApi } from './calls'
import bcrypt from 'bcryptjs'

export const registerUserCall = (
    firstName: string,
    surName: string,
    nickName: string,
    password: string
) => {
    return callApi(
        'user/register-user',
        { firstName, surName, nickName, password: bcrypt.hashSync(password, 10) },
        'POST'
    )
}

export const registerGuessCall = () => {
    return callApi('user/register-guess', {}, 'POST')
}
