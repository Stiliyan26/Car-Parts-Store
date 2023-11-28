import { ApiError, ApiResponse, ApiSuccess, AuthData, TokenData } from '../types/interface/core-interface';

import { API_URL, authStorageKey } from '../constants/GlabalConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { triggerStorageListener } from '../utils/storageEventLiseners';
import { isResponseOk } from '../utils/helperFunctions';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export const requester = async (
  method: RequestMethod = 'GET',
  url: string = '',
  body: {} | null = null,
): Promise<ApiResponse> => {
  let options: RequestInit = {};
  
  if (isNotAuthorizedRequest(url)) {
    options = await createOptions(method, body);
  } else {
    const tokenData = await getTokenDataFromStorage();

    let accessToken = tokenData?.accessToken;

    if (tokenData) {
      const newTokenData: TokenData | null =
        await refreshAccessToken(tokenData.exp, tokenData.refreshToken);

      if (newTokenData) {
        triggerStorageListener();
        accessToken = newTokenData.accessToken;
      }

      options = await createOptions(method, body, accessToken);
    }
  }

  const fetchedData = await fetch(url, options);
  
  const statusCode = fetchedData.status;
  const result = await fetchedData.json();

  return isResponseOk(statusCode)
    ? { statusCode, payload: result } as ApiSuccess
    : { statusCode, errorMsg: result } as ApiError;
};

const createOptions = async (
  method: string = 'GET',
  body: {} | null,
  accessToken: string | undefined = undefined,
) => {
  const options: RequestInit = {
    method
  };

  options.headers = {};

  if (accessToken) {
    options.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  if (method == 'GET') {
    return options;
  }

  options.headers['Content-Type'] = 'application/json'

  options.body = JSON.stringify(body);

  return options;
};

export const request = {
  get: requester.bind(null, 'GET'),
  post: requester.bind(null, 'POST'),
  put: requester.bind(null, 'PUT'),
  patch: requester.bind(null, 'PATCH'),
  delete: requester.bind(null, 'DELETE'),
}


async function refreshAccessToken(expToCheck: number, tokenToSent: string) {
  try {
    const currentDate = new Date();
    const buffer = 60000;

    if (expToCheck && expToCheck - buffer < currentDate.getTime()) {
      const response = await fetch(`${API_URL}/auth/refreshToken`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${tokenToSent}`,
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        const tokenData: TokenData = await response.json();

        const authData = await getAuthStorageData();

        if (authData) {
          await AsyncStorage.setItem(authStorageKey, JSON.stringify({ ...authData, tokenData }));
        }

        return tokenData;
      } else {
        throw new Error('Refresh token request failed');
      }
    }

    return null;
  } catch (error) {
    throw error;
  }
}

async function getTokenDataFromStorage() {
  try {
    const storageData = await AsyncStorage.getItem(authStorageKey);

    if (!storageData) {
      return null;
    }

    const { tokenData } = JSON.parse(storageData) as AuthData;

    if (tokenData.accessToken && tokenData.refreshToken && tokenData.exp) {
      return tokenData;
    }


    return null;
  } catch (error) {
    throw error;
  }
}

export async function getAuthStorageData(): Promise<AuthData | null> {
  const item = await AsyncStorage.getItem(authStorageKey);

  return item
    ? JSON.parse(item) as AuthData
    : null;
}

function isNotAuthorizedRequest(url: string) {
  return url.includes('/api/auth/login');
}


