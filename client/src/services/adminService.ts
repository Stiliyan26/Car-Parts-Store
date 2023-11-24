import { request } from './requester';
import { ApiResponse } from '../types/interface/IData';
import { CreateCompanyData, CreateEmployeeData } from '../types/interface/IForm';
import { API_URL } from '../constants/GlabalConstants';

const baseUrl = `${API_URL}/admin`;
const baseCompanyUrl = `${baseUrl}/companies`;

export const createCompany = (data: CreateCompanyData): Promise<ApiResponse> =>
  request.post(`${baseCompanyUrl}/create`, data);

export const getAllCompanies = (): Promise<ApiResponse> =>
  request.get(`${baseCompanyUrl}/all`);

export const getCompanyById = (companyId: string): Promise<ApiResponse> =>
  request.get(`${baseCompanyUrl}/${companyId}`);

export const createEmployee = (companyId: string, employeeData: CreateEmployeeData): Promise<ApiResponse> =>
  request.post(`${baseCompanyUrl}/employees/create?companyId=${companyId}`, employeeData);

