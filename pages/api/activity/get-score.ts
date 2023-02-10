import { NextApiRequest, NextApiResponse } from 'next'


import {
    getScoreByUserId,
} from '../../../prisma/score'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("req.body", req.query)
    const { userId } = req.query
    try {
        const result = await getScoreByUserId(userId);

        // return basic user details and token
        return res.status(200).json({
            data: result
        })
    } catch (error) {
        console.log("error", error)
        return res.status(500).json({
            errorCode: "server_error"
        })
    }
}
