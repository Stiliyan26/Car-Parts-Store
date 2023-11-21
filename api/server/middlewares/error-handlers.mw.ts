import { StatusError } from '../types/IData';

import type { NextFunction, Request, Response } from 'express';

export const globalErrorHandler = (
  error: StatusError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let errorMessage = 'An unknown error occured!';

  if (error.code === 'P2002') {
    statusCode = 409;
    errorMessage = 'Email already exists!';
  }

  if (error.statusCode && error.message) {
    statusCode = error.statusCode;
    errorMessage = error.message;
  }

  return res.status(statusCode).json(errorMessage);
}