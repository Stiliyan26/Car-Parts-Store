import {  StatusError } from '../types/IData';

import * as crypto from 'crypto';

export function hashPassword(password: string) {
  const hmac = crypto.createHmac('sha256', process.env.HASH_SECRET_KEY as string);
  hmac.update(password);

  return hmac.digest('hex');
}

export function createHttpError(statusCode: number, message: string) {
  const error: StatusError = new Error(message);
  error.statusCode = statusCode;

  return error;
}