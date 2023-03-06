// /prisma/user.js
import prisma from './prisma'

// READ

export const getScoreByUserId = async (userId) => {
  return await prisma.score.findMany({
    where: { userId },
  })
}

export const getScoreCountByUserId = async (userId) => {
  const result = await prisma.score.aggregate({
    where: { userId },
    _sum: {
      points: true,
    },
  })
  return result['_sum']
}

export const addScore = async (userId, score, activityType) => {
  return await prisma.score.create({
    data: { userId, points: score, activityType },
  })
}
