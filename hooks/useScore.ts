import { useCallback, useState, useEffect } from 'react'

import { activityGetScore } from 'calls/admin-page-calls'


export type ScoreListType = {
    activityType: string
    createdAt: string
    difficulty: string
    id: string
    points: number
    userId: string
    data: boolean[]
}

export const NOW = new Date()

export const NOW_ISO = NOW.toISOString()
export const TODAY_MIDNIGHT_ISO = new Date(new Date(NOW.getFullYear(), NOW.getMonth(), NOW.getDate())).toISOString()

export const useScore = (selectUser?: string) => {
    const [scoreList, setScoreList] = useState<ScoreListType[] | undefined>()
    const onFilterChange = useCallback(
        ({
            from,
            to,
            activityTypes,
        }: {
            from?: string
            to?: string
            activityTypes?: string[]
        }) => {
            const getData = async () => {
                try {
                    const res = await activityGetScore(
                        selectUser,
                        from,
                        to,
                        activityTypes
                    )
                    setScoreList(res?.data?.data)
                } catch (error) {
                    console.error('error', error)
                }
            }
            getData()
        },
        [selectUser]
    )

    useEffect(() => {
        if (!!selectUser) {
            onFilterChange({ from: TODAY_MIDNIGHT_ISO, to: NOW_ISO })
        }
    }, [onFilterChange, selectUser])

    return { onFilterChange, scoreList }
}
