// import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next'
import authorize from 'backend/middleware/authorize'

import {
  listUsers,
  listUsersByFirstnameAndSurname,
  countUsers,
  countByFirstnameAndSurname,
} from '../../../prisma/user'

async function listUsersMiddleware(req: NextApiRequest, res: NextApiResponse) {
  const isAuthorized = await authorize(req, res, 'ADMIN')

  const { searchUserString, limit = 5, cursor = 0 } = req.query

  if (isAuthorized) {
    let users = []
    let totalUsersCount = 0

    if (searchUserString?.includes(' ')) {
      const splitedString = (searchUserString as string).split(' ')
      const splitedStringHasCorrectLength = splitedString.length === 2
      try {
        if (splitedStringHasCorrectLength) {
          users = await listUsersByFirstnameAndSurname(
            splitedString[0],
            splitedString[1],
            Number(limit) || 0,
            Number(cursor) || 0
          )
          console.log('users', users)
        } else {
          users = []
        }
      } catch (err) {
        console.error(err)
        return res.status(500).json({
          errorCode: 'server_error',
        })
      }

      try {
        if (splitedStringHasCorrectLength) {
          totalUsersCount = await countByFirstnameAndSurname(
            splitedString[0],
            splitedString[1]
          )
        } else {
          totalUsersCount = 0
        }
      } catch (err) {
        return res.status(500).json({
          errorCode: 'server_error',
        })
      }
    } else {
      try {
        users = await listUsers(
          searchUserString,
          Number(limit) || 0,
          Number(cursor) || 0
        )
      } catch (err) {
        return res.status(500).json({
          errorCode: 'server_error',
        })
      }

      try {
        totalUsersCount = await countUsers(searchUserString)
      } catch (err) {
        return res.status(500).json({
          errorCode: 'server_error',
        })
      }
    }

    return res.status(200).json({ users, totalUsersCount })
  } else {
    return res.status(401).json({
      errorCode: 'not_authorize',
    })
  }
}

export default listUsersMiddleware
