import { request } from './requester';
import { ApiResponse } from '../types/interface/core-interface';
import { API_URL } from '../constants/GlabalConstants';
import { CreatePartData } from '../types/interface/form-interface';

const baseUrl = `${API_URL}/company`;
const partsUrl = `${baseUrl}/parts`;

export const createPart = (partData: CreatePartData): Promise<ApiResponse> =>
  request.post(`${partsUrl}/create`, partData);

export const getCompanyById = (companyId: string): Promise<ApiResponse> =>
  request.get(`${baseUrl}/${companyId}`);


