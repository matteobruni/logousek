// import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next'
import authorize from 'backend/middleware/authorize'


import {
  getAllUsers,
} from '../../../prisma/user'

async function listUsersMiddleware(req: NextApiRequest, res: NextApiResponse) {
  const isAuthorized = await authorize(req, res, "ADMIN")
  if (isAuthorized) {
    try {
      const users = await getAllUsers()
      return res.json(users)
    } catch (err) {
      return res.status(500).json({
        errorCode: 'server_error',
      })
    }
  } else {
    return res.status(401).json({
      errorCode: 'not_authorize',
    })
  }
}

export default listUsersMiddleware