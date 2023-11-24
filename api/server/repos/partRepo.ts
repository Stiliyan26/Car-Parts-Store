import { CreatePartReqBody } from '../types/IRequestBody';
import { CreatePartResult, GetAllPartResult } from '../types/repoInterfaces/IPartRepo';

import { db } from '../utils/db.server';

export const createPart = async (data: CreatePartReqBody): Promise<CreatePartResult | null> => {
  return await db.part.create({
    data: {
      name: data.name,
      imageUrl: data.imageUrl,
      description: data.description,
      pricePerPiece: data.pricePerPiece,
      quantity: data.quantity,
      companyId: data.companyId
    },
    select: {
      id: true,
      imageUrl: true,
      name: true,
      pricePerPiece: true,
      quantity: true
    }
  })
}

export const getAllPartsByCompanyId = async (companyId: string): Promise<GetAllPartResult[]> => {
  return await db.part.findMany({
    where: {
      companyId
    },
    select: {
      id: true,
      imageUrl: true,
      name: true,
      pricePerPiece: true,
      quantity: true
    }
  })
}