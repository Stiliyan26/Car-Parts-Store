import { AuthPayload, CustomRequest } from '../types/core.interfaces';
import { createHttpError } from '../utils/helpers';

import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';


export function verifyToken(tokenType: 'access' | 'refresh' = 'access') {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers['authorization'];
      const token = authHeader?.split(' ')[1].trim();

      if (token === undefined) {
        throw createHttpError(401, 'Token is absent!');
      }

      const secretKey = tokenType === 'access'
        ? process.env.JWT_SECRET_KEY
        : process.env.REFRESH_JWT_SECRET_KEY;

      jwt.verify(token, secretKey as string, (error, authPayload) => {
        if (error) {
          throw createHttpError(400, 'Token is invalid');
        }

        const user = authPayload as AuthPayload;

        if (user) {
          const request = req as CustomRequest;
          request.user = user;
          request.token = token;
        }
      });

      next();
    } catch (error) {
      console
      next(error);
    }
  }
}

export function isAdmin() {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = (req as CustomRequest).user;

      if (user.isAdmin === false) {
        throw createHttpError(401, 'User is not authorized!');
      }

      next();
    } catch (error) {
      next(error);
    }
  }
}