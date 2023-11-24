import * as companyRepo from '../repos/companyRepo';
import { CreateCompanyReqBody, EmployeeReqBody } from '../types/request.interfaces';


export const createCompany = async (data: CreateCompanyReqBody) => {
  return await companyRepo.createCompany(data);
}

export const getAllCompanies = async () => {
  return await companyRepo.allCompanies();
}

export const addEmployeeToCompany = async (companyId: string, employeeData: EmployeeReqBody) => {
  return await companyRepo.addEmployeeToCompany(companyId, employeeData);
}

export const getCompanyById = async (companyId: string) => {
  return await companyRepo.getCompanyById(companyId);
}