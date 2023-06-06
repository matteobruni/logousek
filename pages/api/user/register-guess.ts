import { NextApiRequest, NextApiResponse } from 'next'

import { createUser } from '../../../prisma/user'

const DEFAULT_VALUES = {
  firstName: 'Guess',
  type: 'HOST',
}

async function registerGuess(_: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await createUser(DEFAULT_VALUES)
    return res.status(200).json({
      nickName: result.nickName
    })
  } catch (err) {
    return res.status(500).json({
      errorCode: 'server_error',
    })
  }
}

export default registerGuess
