import activityController from '../../../backend/controllers/activity-controller'
import { NextApiRequest, NextApiResponse } from 'next'


import {
  getUserById,
} from '../../../prisma/user'

import {
  addScore,
} from '../../../prisma/score'


import {
  addScoreData,
} from '../../../prisma/scoreData'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // await activityController.addScore(req, res)
  const { userId, points, activityType, results } = req?.body || {}
  console.log("userId, score", userId, points, req.body)
  const user = await getUserById({ userId })
  // validate
  if (!user) {
    return res.status(400).json({
      errorCode: 'user_not_found',
    })
  }

  let scoreId = ""
  try {
    scoreId = (await addScore(userId, points, activityType))?.id;
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      errorCode: "server_error"
    })
  }
  console.log("results", results)
  try {
    const saveScoreData = async (order: number, isCorrect: boolean) => {
      await addScoreData(scoreId, order, isCorrect);
    }

    typeof results === "object" && Object.entries(results).map(result => {
      saveScoreData(parseInt(result[0]) || 0, result[1] as boolean)
    })
    return res.status(200).json({})

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      errorCode: "server_error"
    })
  }

}
