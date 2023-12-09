import { CookieStorageKey } from '../types/enums';
import { TokenData } from '../types/interface/core-interface';
import { tokenDataStorageKey } from '../constants/GlabalConstants';

import Cookies from 'universal-cookie';
import AsyncStorage from '@react-native-async-storage/async-storage';

const cookies = new Cookies();

export default cookies;

export function readAuthCookieFromResponse(fetchedData: Response): TokenData | null {
  const rawCookieHeader = fetchedData.headers.get('Set-Cookie') as string;

  if (!rawCookieHeader) {
    return null;
  }

  const cookieData = rawCookieHeader.split(',');

  const accessToken = cookieData[0].split(";")[0].split("=")[1];
  const refreshToken = cookieData[1].split(";")[0].split("=")[1];
  const exp = parseInt(cookieData[2].split(";")[0].split("=")[1]);

  return {
    accessToken,
    refreshToken,
    exp
  }
}

export async function setAuthCookies(tokenData: TokenData): Promise<void> {
  cookies.set(CookieStorageKey.ACCESS_TOKEN, tokenData.accessToken,
    { path: '/', httpOnly: true },);

  cookies.set(CookieStorageKey.REFRESH_TOKEN, tokenData.refreshToken,
    { path: '/', httpOnly: true });

  cookies.set(CookieStorageKey.EXP_ACCESS_TOKEN, tokenData.exp,
    { path: '/', httpOnly: true });

  await AsyncStorage.setItem(tokenDataStorageKey, JSON.stringify(tokenData));
}

export function getCookieByName(name: string): string | undefined {
  return cookies.get(name);
}