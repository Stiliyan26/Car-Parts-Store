import {
  AdminData,
  AuthData,
  AuthPayload,
  EmployeeData,
} from '../types/core.interfaces';
import * as tokenRepo from '../repos/tokenRepo';
import { getAdminByEmailAndPassword } from '../repos/adminRepo';
import { getEmployeeByEmailAndPassword } from '../repos/employeeRepo';
import AuthenticationTokenMissingException from '../exceptions/AuthenticationTokenMissingException';
import UserNotFoundException from '../exceptions/UserNotFoundException';
import InvalidAuthenticationTokenException from '../exceptions/InvalidAuthenticationTokenException';

import jwt from 'jsonwebtoken';

export const generateToken = (payload: AuthData) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY as string, { expiresIn: '30m' });
}

export const generateRefreshToken = (payload: AuthData) => {
  return jwt.sign(payload, process.env.REFRESH_JWT_SECRET_KEY as string)
}

export const getAccessTokenExp = (accessToken: string) => {
  const { exp } = jwt.decode(accessToken) as AuthPayload;

  return exp! * 1000;
}

export async function verifyRefreshToken(refreshToken: string) {
  const existingRefreshToken = await tokenRepo.getRefreshToken(refreshToken);
  
  if (!existingRefreshToken) {
    throw new AuthenticationTokenMissingException();
  }

  return new Promise(async (resolve, reject) => {
    jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET_KEY as string, async (error, authPayload) => {
      if (error) {
        reject(new InvalidAuthenticationTokenException());
      }

      await deleteRefreshToken(refreshToken);

      const { iat, ...payloadWithoutIAT } = authPayload as AuthPayload;

      const newAccessToken = generateToken(payloadWithoutIAT as AuthData);
      const newRefreshToken = generateRefreshToken(payloadWithoutIAT as AuthData);
      const exp = getAccessTokenExp(newAccessToken);

      await tokenRepo.createRefreshToken(newRefreshToken);

      const tokenData = {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
        exp
      }

      resolve(tokenData);
    })
  })
}
function IsUserAdmin(user: unknown): user is EmployeeData { 
  return (user as EmployeeData).role === undefined 
}; 
export async function getUser(email: string, password: string) {
  let user: AdminData | EmployeeData | null = null;

  const admin = await getAdminByEmailAndPassword(email, password);

  if (admin) {
    user = admin;
  } else {
    user = await getEmployeeByEmailAndPassword(email, password);
  }

  if (!user) {
    throw new UserNotFoundException('Email or password is incorrect!');
  }

  const isAdmin = IsUserAdmin(user);

  return {
    ...user,
    isAdmin
  }
}

export async function getAuthTokens(authData: AuthData) {
  const accessToken = generateToken(authData);
  const refreshToken = generateRefreshToken(authData);
  const exp = getAccessTokenExp(accessToken);

  await tokenRepo.createRefreshToken(refreshToken);

  return {
    accessToken,
    refreshToken,
    exp
  }
}

export async function deleteRefreshToken(refreshToken: string) {
  await tokenRepo.deleteRefreshToken(refreshToken);
}


