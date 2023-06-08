import { callApi } from "./calls"

export const registerUserCall = (firstName: string, surName: string, nickName: string, password: string) => {

    return callApi("user/register-user", { firstName, surName, nickName, password }, "POST")
}

export const registerGuessCall = () => {
    return callApi("user/register-guess", {}, "POST")
}