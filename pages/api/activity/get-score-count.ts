import { NextApiRequest, NextApiResponse } from 'next'

import getScoreCountdtoIn from 'backend/dtoIn/get-score-count'
import checkUnsupportedKeys from 'backend/dtoIn/check-unsupported-keys'

import {
    getScoreCountByUserId,
} from 'backend/dao/score'

import {
    getUserById,
} from 'backend/dao/user'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // 1. Check httpMethod
    if (req.method === "GET") {
        //2. Check dtoIn
        if (typeof req?.query !== "object" || !await getScoreCountdtoIn.isValid(req?.query)) {
            //2.1. dtoIn is not valid
            return res.status(400).json({
                errorCode: 'wrong_dto_in',
            })
        }
        //2.2. dtoIn contains keys beyond the scope of dtoInType
        const warnings = checkUnsupportedKeys(["userId"], req.body)


        const { userId } = req.query

        //3. Check if the userId from dtoIn exists
        let user
        try {
            user = await getUserById(userId)
        } catch (err) {
            //3.1. Failed to get data from the database and an error was thrown
            console.error(err)
            return res.status(400).json({
                errorCode: 'server_error',
                warnings: warnings
            })
        }

        //3.2. UserId from dtoIn does not exists. return user_not_found error
        if (!user) {
            return res.status(400).json({
                errorCode: 'user_not_found',
                warnings: warnings
            })
        }

        //4. Get score count from the database
        try {
            const result = await getScoreCountByUserId(userId);
            //5. Returns properly filled dtoOut.
            return res.status(200).json({
                points: result?.points,
                warnings: warnings
            })
        } catch (error) {
            //4.1. Failed to get data from the database and an error was thrown
            return res.status(500).json({
                errorCode: "server_error",
                warnings: warnings
            })
        }
    } else {
        //1.1. ERROR - If httpMethod is not POST return not_found error
        return res.status(404).json({
            errorCode: 'endpoint_not_found'
        })
    }
}
