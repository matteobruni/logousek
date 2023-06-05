// import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"


import {
  createUser,
  getUserByName,
} from '../../../prisma/user'

async function registerGuess(req: NextApiRequest, res: NextApiResponse) {
  const { password, ...user } = req.body.params
  // validate
  const usersWithSameNick = await getUserByName({ nickName: user.nickName })
  if (usersWithSameNick && usersWithSameNick.length) {
    return res.status(400).json({ errorCode: "user_exists" })
  }

  // hash password
  user.password = bcrypt.hashSync(password, 10)

  createUser(user)
  return res.status(200).json({})
}

export default registerGuess