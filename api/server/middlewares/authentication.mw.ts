import { AuthPayload, CustomRequest } from '../types/IData';
import { createHttpError } from '../utils/helpers';

import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';


export function verifyToken() {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers['authorization'];
      const accessToken = authHeader?.split(' ')[1];
      
      if (accessToken === undefined) {
        throw createHttpError(401, 'Token is absent!');
      }

      jwt.verify(accessToken, process.env.JWT_SECRET_KEY as string, (error, authPayload) => {
        if (error) {
          throw createHttpError(400, 'Token is invalid');
        }

        const user = authPayload as AuthPayload;

        if (user) {
          (req as CustomRequest).user = user;
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