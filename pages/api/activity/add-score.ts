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
  console.log("test1")
  // validate
  if (!user) {
    console.log("test11")
    return res.status(400).json({
      errorCode: 'user_not_found',
    })
  }
  console.log("test2")
  let scoreId = ""
  try {
    console.log("test3")
    scoreId = (await addScore(userId, points, activityType))?.id;
    console.log("test4")
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      errorCode: "server_error"
    })
  }
  console.log("results", results)
  try {
    console.log("test333")
    const saveScoreData = async (order: number, isCorrect: boolean) => {
      console.log("order, isCorrect", order, isCorrect)
      await addScoreData(scoreId, order, isCorrect);
    }

    console.log("order, isCorrect", Object.entries(results))
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
