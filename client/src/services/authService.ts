import { requestFactory, requester } from "./requester";
import { LoginData } from "../types/interface/IForm";
import { ApiResponse } from "../types/interface/IData";
import { API_URL } from '../constants/GlabalConstants';

const baseUrl = `${API_URL}/auth`;

const request = requestFactory();

export const getUserByEmailAsync = (loginData: LoginData): Promise<ApiResponse> =>
  request.post(`${baseUrl}/login`, loginData);
