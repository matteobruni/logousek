import { NextApiRequest, NextApiResponse } from 'next'


import {
    getScoreByUserId,
} from '../../../prisma/score'
import { getScoreDataByUserId } from 'prisma/scoreData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("req.body", req.body, req.query)
    const { userId, activityTypes, from, to } = req.body
    try {
        const result = await getScoreByUserId(userId, activityTypes, from, to);

        const resultWithScoreData = []
        for (let i = 0; i < result.length; i++) {
            const scoreItem = result[i]
            const scoreData = await getScoreDataByUserId(scoreItem?.id)
            resultWithScoreData.push({ ...scoreItem, scoreData: scoreData })
        }
        console.log("resultWithScoreData", resultWithScoreData)
        return res.status(200).json({
            data: resultWithScoreData
        })
    } catch (error) {
        console.log("error", error)
        return res.status(500).json({
            errorCode: "server_error"
        })
    }
}
