import { NextApiRequest, NextApiResponse } from 'next'


import {
    getScoreByUserId,
} from '../../../prisma/score'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId, activityTypes, from, to } = req.query
    try {
        const result = await getScoreByUserId(userId, activityTypes, from, to);

        return res.status(200).json({
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            errorCode: "server_error"
        })
    }
}
