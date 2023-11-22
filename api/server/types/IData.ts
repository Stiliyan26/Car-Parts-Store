import { JwtPayload } from 'jsonwebtoken';
import type { Request } from 'express';

export interface StatusError extends Error {
  statusCode?: number,
  code?: string
}

interface UserCommon {
  id: string,
  name: string,
  email: string,
}

export interface CustomRequest extends Request {
  user: AuthPayload
  token: string 
}

export interface AuthPayload extends UserCommon, JwtPayload {
  role?: string,
  isAdmin: boolean,
  iat?: number
}

export interface AuthData extends UserCommon {
  role?: string,
  isAdmin: boolean,
  iat?: number
}

export interface AdminData extends UserCommon {
}

export interface EmployeeData extends UserCommon {
  role: string
}

export interface TokenData {
  accessToken: string,
  refreshToken: string,
  exp: number
}

