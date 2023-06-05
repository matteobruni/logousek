// import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'

import { createUser } from '../../../prisma/user'

const DEFAULT_VALUES = {
  firstName: 'Guess',
  type: 'HOST',
}

async function registerGuess(_: NextApiRequest, res: NextApiResponse) {
  try {
    createUser(DEFAULT_VALUES)
    return res.status(200).json({})
  } catch (err) {
    return res.status(500).json({
      errorCode: 'server_error',
    })
  }
}

export default registerGuess
