import * as partRepo from '../repos/partRepo';
import * as companyRepo from '../repos/companyRepo';
import { CreatePartReqBody } from '../types/request.interfaces';

export const createPart = async (data: CreatePartReqBody) => {
  return await partRepo.createPart(data);
} 

export const getAllPartsByCompanyId = async (companyId: string) => {
  return await partRepo.getAllPartsByCompanyId(companyId);
} 

export const getCompanyWithPartsById = async (companyId: string) => {
  return await companyRepo.getCompanyWithPartsById(companyId);
}