import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react'
import axios from 'axios'


export const usePlayerScore = (): [{ score?: string }] => {

    const sessionData = useSession()
    const [score, setScore] = useState<string | undefined>();

    useEffect(() => {
        const userData = sessionData.data?.user as {
            email: string
            name: string
            id: string
        }
        if (userData?.id) {
            const getData = async () => {
                const res = await axios.get('/api/activity/get-score-count', { params: { userId: userData?.id } });
                setScore(res?.data?.points)
            }
            getData()
        }
    }, [sessionData.data?.user])

    return [{ score }]
};