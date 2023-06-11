import prisma from '../../prisma/prisma'

export const countUsers = async (searchUserString) => {
  if (searchUserString) {
    return await prisma.user.count({
      where: {
        OR: [
          {
            nickName: {
              contains: searchUserString,
              mode: 'insensitive',
            },
          },
          {
            firstName: {
              contains: searchUserString,
              mode: 'insensitive',
            },
          },
          {
            surName: {
              contains: searchUserString,
              mode: 'insensitive',
            },
          },
        ],
      },
    })
  }
  return await prisma.user.count({})
}

export const countByFirstnameAndSurname = async (firstString, secondString) => {
  return await prisma.user.count({
    where: {
      OR: [
        {
          AND: [
            {
              firstName: {
                contains: firstString,
                mode: 'insensitive',
              },
            },
            {
              surName: {
                contains: secondString,
                mode: 'insensitive',
              },
            },
          ],
        },
        {
          AND: [
            {
              firstName: {
                contains: secondString,
                mode: 'insensitive',
              },
            },
            {
              surName: {
                contains: firstString,
                mode: 'insensitive',
              },
            },
          ],
        },
      ],
    },
  })
}

export const listUsersByFirstnameAndSurname = async (
  firstString,
  secondString,
  limit,
  cursor
) => {
  return await prisma.user.findMany({
    skip: cursor,
    take: limit,
    where: {
      OR: [
        {
          AND: [
            {
              firstName: {
                contains: firstString,
                mode: 'insensitive',
              },
            },
            {
              surName: {
                contains: secondString,
                mode: 'insensitive',
              },
            },
          ],
        },
        {
          AND: [
            {
              firstName: {
                contains: secondString,
                mode: 'insensitive',
              },
            },
            {
              surName: {
                contains: firstString,
                mode: 'insensitive',
              },
            },
          ],
        },
      ],
    },
  })
}

export const listUsers = async (searchUserString, limit, cursor) => {
  if (searchUserString) {
    return await prisma.user.findMany({
      skip: cursor,
      take: limit,
      where: {
        OR: [
          {
            nickName: {
              contains: searchUserString,
              mode: 'insensitive',
            },
          },
          {
            firstName: {
              contains: searchUserString,
              mode: 'insensitive',
            },
          },
          {
            surName: {
              contains: searchUserString,
              mode: 'insensitive',
            },
          },
        ],
      },
    })
  }

  return prisma.user.findMany({
    skip: cursor,
    take: limit,
  })
}

export const getUserByName = async (nickName) => {
  const user = await prisma.user.findMany({
    where: { nickName },
  })
  return user
}

export const getUserById = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  })
  return user
}

// CREATE
export const createUser = async (userData) => {
  const user = await prisma.user.create({
    data: userData,
  })
  return user
}

// DELETE
export const deleteUser = async (id) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  })
  return user
}
