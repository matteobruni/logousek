import { NextApiRequest, NextApiResponse } from 'next'


import {
    getScoreCountByUserId,
} from '../../../prisma/score'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = req.query
    try {
        const result = await getScoreCountByUserId(userId);
        // return basic user details and token
        return res.status(200).json({
            points: result?.points
        })
    } catch (error) {
        return res.status(500).json({
            errorCode: "database_error"
        })
    }
}
