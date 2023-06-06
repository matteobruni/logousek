import axios from 'axios'

const callApi = async (endpoint: string, data: any, method: "POST" | "GET") => {
    const usedFunction = method === "GET" ? axios.get : axios.post
    return await usedFunction(`/api/${endpoint}`, {
        params: data,
    })
}

export const registerUserCall = (firstName: string, surName: string, nickName: string, password: string) => {

    return callApi("user/register-user", { firstName, surName, nickName, password }, "POST")
}

export const registerGuessCall = () => {
    return callApi("user/register-guess", {}, "POST")
}