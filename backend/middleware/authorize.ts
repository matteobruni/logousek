import { unstable_getServerSession } from 'next-auth/next'
import { NextApiRequest, NextApiResponse } from 'next'

import { authOptions } from '../../pages/api/auth/[...nextauth]'

export default async function handler(req: NextApiRequest, res: NextApiResponse, role: string) {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (session) {
    switch (role) {
      case "ADMIN":
        if ((session?.user as any)?.role === "ADMIN") {
          return true;
        }
        return false;
      default:
        return true;
    }
  }
  return false

}
