// import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next'
import user from 'constants/types/user-type'
import bcrypt from "bcryptjs"
// import { hash } from "bcrypt";

// export default async function handler() {
// req
// res
// const { email, password } = req.body
//   const exists = await prisma.user.findUnique({
//     where: {
//       email,
//     },
//   });
//   if (exists) {
//     res.status(400).send("User already exists");
//   } else {
//     const user = await prisma.user.create({
//       data: {
//         email,
//         password: await hash(password, 10),
//       },
//     });
//     res.status(200).json(user);
//   }

import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserByName,
  updateUser,
} from '../../../prisma/user'

async function register(req: NextApiRequest, res: NextApiResponse) {
  const { password, ...user } = req.body

  // validate
  const usersWithSameNick = await getUserByName({ nickName: req.body.nickName })
  if (usersWithSameNick && usersWithSameNick.length) {
    return res.status(400).json({ errorCode: "user_exists" })
  }

  // hash password
  user.password = bcrypt.hashSync(password, 10)

  createUser(user)
  return res.status(200).json({})
}

export default register