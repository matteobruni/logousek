// /prisma/user.js
import prisma from './prisma'
import { getEndOfDay, getStartOfDay } from '@helpers/date-helper'
import { isEmptyArray } from '@helpers/array-helper'

// READ

export const getScoreByUserId = async (userId, activityTypes, from, to) => {
  const activityType = isEmptyArray(activityTypes)
    ? { in: activityTypes }
    : undefined

  return await prisma.score.findMany({
    where: {
      userId,
      activityType,
      createdAt: {
        lte: to ? getEndOfDay(to) : undefined,
        gte: from ? getStartOfDay(from) : undefined,
      },
    },
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

export const addScore = async (userId, score, activityType, difficulty) => {
  return await prisma.score.create({
    data: { userId, points: score, activityType, difficulty },
  })
}
