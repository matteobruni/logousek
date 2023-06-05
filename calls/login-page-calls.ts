import axios from 'axios'

export const registerCall = async (firstName: string, surName: string, nickName: string, password: string) => {
    return await axios.post('/api/user/register', {
        params: { firstName, surName, nickName, password },
    })
}