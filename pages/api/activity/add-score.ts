import { NextApiRequest, NextApiResponse } from 'next'

import {
  getUserById,
} from '../../../prisma/user'

import {
  addScore,
} from '../../../prisma/score'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // await activityController.addScore(req, res)
  const { userId, points, activityType, results, difficulty } = req?.body || {}

  const user = await getUserById({ userId })

  // validate
  if (!user) {

    return res.status(400).json({
      errorCode: 'user_not_found',
    })
  }

  try {

    await addScore(userId, points, activityType, difficulty, results)

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      errorCode: "server_error"
    })
  }

}
