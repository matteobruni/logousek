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

type scoreDataType = { scoreId: string, order: number, isCorrect: boolean }

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

  let scoreId = ""
  try {

    scoreId = (await addScore(userId, points, activityType, difficulty, results))?.id;

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      errorCode: "server_error"
    })
  }

  try {

    const saveScoreData = async (scoreDataArray: scoreDataType[]) => {
      await addScoreData(scoreDataArray);
    }


    const scoreDataArray: scoreDataType[] = []
    typeof results === "object" && Object.entries(results).map(result => {
      scoreDataArray.push({
        scoreId, order: parseInt(result[0]) || 0, isCorrect: result[1] as boolean
      }
      )
    })


    saveScoreData(scoreDataArray)

    return res.status(200).json({})

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      errorCode: "server_error"
    })
  }

}
