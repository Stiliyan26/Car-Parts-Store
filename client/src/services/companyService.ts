import { request } from './requester';
import { ApiResponse } from '../types/interface/IData';
import { API_URL } from '../constants/GlabalConstants';
import { CreatePartData } from '../types/interface/IForm';

const baseUrl = `${API_URL}/company`;
const partsUrl = `${baseUrl}/parts`;

export const createPart = (partData: CreatePartData): Promise<ApiResponse> =>
  request.post(`${partsUrl}/create`, partData);

export const getCompanyById = (companyId: string): Promise<ApiResponse> =>
  request.get(`${baseUrl}/${companyId}`);


