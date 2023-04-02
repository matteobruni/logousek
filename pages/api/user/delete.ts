// import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next'


import {
  deleteUser,
} from '../../../prisma/user'

async function deleteUserMiddleware(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.body.params
  try {
    await deleteUser({ id: userId })
    return res.status(200).json({})
  } catch (err) {
    console.error("error", err)
    return res.status(500).json({})
  }
}

export default deleteUserMiddleware