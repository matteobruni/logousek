// /prisma/scoreData.js
import prisma from './prisma'

export const addScoreData = async (scoreId, order, isCorrect) => {
  return await prisma.scoredata.create({
    data: { scoreId, order, isCorrect },
  })
}
