import { request } from './requester';
import { LoginData } from '../types/interface/form-interface';
import { ApiResponse } from '../types/interface/core-interface';
import { API_URL } from '../constants/GlabalConstants';

const baseUrl = `${API_URL}/auth`;


export const getUserByEmail = (loginData: LoginData): Promise<ApiResponse> =>
  request.post(`${baseUrl}/login`, loginData);

export const deleteRefreshToken = async (refreshToken: string): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${refreshToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      console.log("Refresh token deleted!");
    }
  } catch (error: unknown) {
    console.log((error as Error).message);
  }
}
