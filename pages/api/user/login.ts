import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import getConfig from 'next/config'
import { NextApiRequest, NextApiResponse } from 'next'


const { serverRuntimeConfig } = getConfig()


import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserByName,
  updateUser,
} from '../../../prisma/user'

async function authenticate(req: NextApiRequest, res: NextApiResponse) {
  const { nickName, password } = req.body
  const user = (await getUserByName(nickName))[0]
  // validate
  if (!user || !bcrypt.compareSync(password, user.password)) {
    res.status(400).json({
      errorCode: "wrong_password"
    })
  }
  console.log("serverRuntimeConfig.secret", serverRuntimeConfig.secret)
  const JWT_SECRET = process.env.JWT_SECRET || ""
  // create a jwt token that is valid for 7 days
  const token = jwt.sign({ sub: user.id }, JWT_SECRET, {
    expiresIn: '7d',
  })

  // return basic user details and token
  return res.status(200).json({
    id: user.id,
    firstName: user.firstName,
    surName: user.surName,
    nickName: user.nickName,
    token,
  })
}

export default authenticate