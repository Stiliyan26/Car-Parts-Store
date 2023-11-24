import { StatusError } from '../types/core.interfaces';

import type { NextFunction, Request, Response } from 'express';

export const globalErrorHandler = (
  error: StatusError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = error.statusCode || 500;
  let errorMessage = error.message || 'An unknown error occured!';
  
  if (error.code === 'P2002') {
    statusCode = 409;
    errorMessage = 'Email already exists!';
  }

  else if (error.code === 'P2003') {
    statusCode = 422;
    errorMessage = 'Foreign key constraint failed on the field: `foreign key`'
  }

  return res.status(statusCode).json(errorMessage);
}
