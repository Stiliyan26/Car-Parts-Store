import { checkLoginBody } from '../middlewares/validation.mw';
import { getValidationResult } from '../middlewares/validation.mw';
import * as authService from '../services/authService';

import express from 'express';
import type { NextFunction, Request, Response } from 'express';
import { AuthData, CustomRequest, TokenData } from '../types/core.interfaces';
import { verifyToken } from '../middlewares/authentication.mw';
import { REFRESH_TOKEN } from '../constants/globalConstants';

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

      return res
        .cookie('tokenData', tokenData.refreshToken, { httpOnly: true })
        .status(200)
        .json({ ...authData, tokenData });

    } catch (error: unknown) {
      next(error);
    }
  });


authController.post('/refreshToken', verifyToken(REFRESH_TOKEN),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const refreshToken = (req as CustomRequest).token;

      const tokenData = await authService.verifyRefreshToken(refreshToken);

      return res.status(200).json(tokenData);
    } catch (error: unknown) {
      next(error);
    }
  });


authController.delete('/logout', verifyToken(REFRESH_TOKEN),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const refreshToken = (req as CustomRequest).token;

      await authService.deleteRefreshToken(refreshToken);

      res.status(204).json('Refresh token deleted!');
    } catch (error: unknown) {
      next(error);
    }
  })

