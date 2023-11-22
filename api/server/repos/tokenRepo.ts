import { db } from '../utils/db.server';

interface Token {
  token: string
}

export const createRefreshToken = async (
  token: string
): Promise<Token> => {
  return await db.token.create({
    data: {
      token
    }
  })
}

export const getRefreshToken = async (
  token: string
): Promise<Token | null> => {
  return await db.token.findFirst({
    where: {
      token
    },
    select: {
      token: true
    }
  })
}

export const deleteRefreshToken = async (
  token: string
): Promise<Token> => {
  return await db.token.delete({
    where: {
      token
    }
  })
}