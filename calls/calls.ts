import axios from 'axios'

export const callApi = async (endpoint: string, data: any, method: "POST" | "GET") => {
    const usedFunction = method === "GET" ? axios.get : axios.post
    return await usedFunction(`/api/${endpoint}`, {
        params: data,
    })
}