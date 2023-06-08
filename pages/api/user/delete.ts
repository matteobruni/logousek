// import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next'
import authorize from 'backend/middleware/authorize'


import {
  deleteUser,
} from '../../../prisma/user'

async function deleteUserMiddleware(req: NextApiRequest, res: NextApiResponse) {
  const isAuthorized = await authorize(req, res, "ADMIN")

  console.log("userId", isAuthorized, req.body.params)
  if (isAuthorized) {
    const { userId } = req.body.params
    try {
      await deleteUser({ id: userId })
      return res.status(200).json({})
    } catch (err) {
      console.error("error", err)
      return res.status(500).json({})
    }
  } else {
    return res.status(401).json({
      errorCode: 'not_authorize',
    })
  }
}

export default deleteUserMiddleware