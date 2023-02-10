// /prisma/user.js
import prisma from './prisma'

// READ

export const getScoreByUserId = async (userId) => {
  const user = await prisma.score.findMany({
    where: { userId },
  })
  return user
}

export const addScore = async (userId, result, activityType) => {
  const user = await prisma.score.create({
    data: { userId, points: result, activityType },
  })
  return user
}
