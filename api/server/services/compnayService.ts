import * as partRepo from '../repos/partRepo';
import { CreatePartReqBody } from '../types/IRequestBody';

export const createPart = async (data: CreatePartReqBody) => {
  return await partRepo.createPart(data);
} 

export const getAllPartsByCompanyId = async (companyId: string) => {
  return await partRepo.getAllPartsByCompanyId(companyId);
} 