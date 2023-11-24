import { request } from './requester';
import { ApiResponse } from '../types/interface/IData';
import { CreateCompanyData, CreateEmployeeData } from '../types/interface/IForm';
import { API_URL } from '../constants/GlabalConstants';

const baseUrl = `${API_URL}/admin`;

export const createCompany = (data: CreateCompanyData): Promise<ApiResponse> =>
  request.post(`${baseUrl}/create`, data);

export const getAllCompanies = (): Promise<ApiResponse> =>
  request.get(`${baseUrl}/all`);

export const getCompanyById = (companyId: string): Promise<ApiResponse> =>
  request.get(`${baseUrl}/${companyId}`);

export const createEmployee = (companyId: string, employeeData: CreateEmployeeData): Promise<ApiResponse> =>
  request.post(`${baseUrl}/employees/create?companyId=${companyId}`, employeeData);

