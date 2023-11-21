import { db } from '../utils/db.server';

export interface TokenCommon {
  token: string
}

interface CreateRefreshToken extends TokenCommon {}

export const createRefreshToken = async (
  data: CreateRefreshToken
) => {
  return await db.token.create({
    data: {
      token: data.token
    }
  })
}

interface GetRefreshToken extends TokenCommon {}

export const getRefreshToken = async (
  data: GetRefreshToken
): Promise<GetRefreshToken | null> => {
  return await db.token.findFirst({
    where: {
      token: data.token
    },
    select: {
      token: true
    }
  })
}

interface DeleteRefreshToken extends TokenCommon {}

export const deleteRefreshToken = async (
  data: DeleteRefreshToken
) => {
  return await db.token.delete({
    where: {
      token: data.token
    }
  })
}