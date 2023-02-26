// import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next'


import {
  deleteUser,
} from '../../../prisma/user'

async function deleteUserMiddleware(req: NextApiRequest, res: NextApiResponse) {
  console.log("req.body.params", req.body.params, req.body)
  const { userId } = req.body.params
  console.log("userId", userId, req.body.params.userId)
  try {
    await deleteUser({ id: userId })
    return res.status(200).json({})
  } catch (err) {
    console.error("error", err)
    return res.status(500).json({})
  }
}

export default deleteUserMiddleware