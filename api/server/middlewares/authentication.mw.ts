import { AuthPayload, CustomRequest } from '../types/core.interfaces';
import {
  AuthenticationTokenMissingException,
  InvalidAuthenticationTokenException,
  NotAuthorizedException
} from '../exceptions';
import { ACCESS_TOKEN, Token } from '../constants/globalConstants';

import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export function verifyToken(tokenType: Token = ACCESS_TOKEN) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers['authorization'];
      const token = authHeader?.split(' ')[1].trim();

      if (token === undefined) {
        throw new AuthenticationTokenMissingException();
      }

      const secretKey = tokenType === ACCESS_TOKEN
        ? process.env.JWT_SECRET_KEY
        : process.env.REFRESH_JWT_SECRET_KEY;

      jwt.verify(token, secretKey as string, (error, authPayload) => {
        if (error) {
          throw new InvalidAuthenticationTokenException();
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
      next(error);
    }
  }
}

export function isAdmin() {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = (req as CustomRequest).user;

      if (user.isAdmin === false) {
        throw new NotAuthorizedException();;
      }

      next();
    } catch (error) {
      next(error);
    }
  }
}