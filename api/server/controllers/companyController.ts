import { createHttpError } from '../utils/helpers';
import { verifyToken } from '../middlewares/authentication.mw';
import * as companyService from '../services/compnayService';

import express from 'express';
import type { NextFunction, Request, Response } from 'express';

export const companyController = express.Router();

companyController.use(verifyToken());

companyController.post('/part/create', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const part = await companyService.createPart(req.body);

    if (!part) {
      throw createHttpError(404, 'Part not created!');
    }

    return res.status(200).json(part);
  } catch (error: unknown) {
    next(error);
  }
});

companyController.get('/part/all', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const companyId = req.query.companyId as string;

    const parts = await companyService.getAllPartsByCompanyId(companyId);

    return res.status(200).json(parts);
  } catch (error: unknown) {
    next(error);
  }
});


