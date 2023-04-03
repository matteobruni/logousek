// /prisma/scoreData.js
import prisma from './prisma'

export const addScoreData = async (scoreDataType) => {
  return await prisma.scoreData.createMany({
    data: scoreDataType,
  })
}

export const getScoreDataByUserId = async (scoreId) => {
  return await prisma.scoreData.findMany({
    where: {
      scoreId,
    },
  })
}
