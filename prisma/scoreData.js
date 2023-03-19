// /prisma/scoreData.js
import prisma from './prisma'

export const addScoreData = async (scoreId, order, isCorrect) => {
  return await prisma.scoreData.create({
    data: { scoreId, order, isCorrect },
  })
}

export const getScoreDataByUserId = async (scoreId) => {
  return await prisma.scoreData.findMany({
    where: {
      scoreId,
    },
  })
}
