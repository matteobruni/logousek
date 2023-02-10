import activityController from '../../../backend/controllers/activity-controller'
import { NextApiRequest, NextApiResponse } from 'next'


import {
  getUserById,
} from '../../../prisma/user'

import {
  addScore,
} from '../../../prisma/score'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // await activityController.addScore(req, res)
  const { userId, score, activityType } = req.body.params
  console.log("userId, score", userId, score, req.body)
  const user = await getUserById({ userId })
  // validate
  if (!user) {
    return res.status(400).json({
      errorCode: 'user_not_found',
    })
  }

  try {
    await addScore(userId, score, activityType);

    // return basic user details and token
    return res.status(200).json({
    })
  } catch (error) {
    return res.status(500).json({
      errorCode: "server_error"
    })
  }
}
