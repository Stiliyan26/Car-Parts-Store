import { checkLoginBody } from '../middlewares/validation.mw';
import { getValidationResult } from '../middlewares/validation.mw';
import { createHttpError } from '../utils/helpers';
import * as authService from '../services/authService';

import express from 'express';
import type { NextFunction, Request, Response } from 'express';
import { AuthData, CustomRequest, TokenData } from '../types/IData';
import { verifyToken } from '../middlewares/authentication.mw';


export const authController = express.Router();

interface LoginBody {
  email: string,
  password: string
}

authController.post('/login',
  checkLoginBody(),
  getValidationResult(),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password }: LoginBody = req.body;
      
      const authData: AuthData = await authService.getUser(email, password);
      const tokenData: TokenData = await authService.getAuthTokens(authData);

      return res.status(200).json({ ...authData, tokenData });

    } catch (error: unknown) {
      next(error);
    }
  });


authController.post('/refreshToken', verifyToken('refresh'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const refreshToken = (req as CustomRequest).token;

      if (!refreshToken) {
        throw createHttpError(401, 'You are not authenticated!');
      }

      const tokenData = await authService.verifyRefreshToken(refreshToken);

      return res.status(200).json(tokenData);
    } catch (error: unknown) {
      next(error);
    }
  });


authController.post('/logout', verifyToken('refresh'),
 async (req: Request, res: Response, next: NextFunction) => {
  try {
    const refreshToken = (req as CustomRequest).token;

    if (!refreshToken) {
      throw createHttpError(401, 'You are not authenticated!');
    }

    await authService.deleteRefreshToken(refreshToken);

    res.status(200).json('Refresh token deleted!');
  } catch (error: unknown) {
    next(error);
  }
})

