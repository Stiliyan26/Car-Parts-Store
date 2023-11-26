import { verifyToken } from '../middlewares/authentication.mw';
import * as companyService from '../services/compnayService';
import CreationFailedException from '../exceptions/CreationFailedException';
import NotFoundException from '../exceptions/NotFoundException';

import express from 'express';
import type { NextFunction, Request, Response } from 'express';
import { checkCreatePartBody } from '../middlewares/validation.mw';

export const companyController = express.Router();

const partsUrl = '/parts';

companyController.use(verifyToken());

companyController.post(`${partsUrl}/create`,
  checkCreatePartBody(),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const part = await companyService.createPart(req.body);

      if (!part) {
        throw new CreationFailedException('Part');
      }

      return res.status(200).json(part);
    } catch (error: unknown) {
      next(error);
    }
  });

companyController.get('/:companyId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('here');
    const companyId = req.params.companyId;

    const company = await companyService.getCompanyWithPartsById(companyId);

    if (!company) {
      throw new NotFoundException('Company');
    }

    return res.status(200).json(company);
  } catch (error: unknown) {
    next(error);
  }
})


// companyController.get(`${partsUrl}/all`, async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const companyId = req.query.companyId as string;

//     const parts = await companyService.getAllPartsByCompanyId(companyId);

//     return res.status(200).json(parts);
//   } catch (error: unknown) {
//     next(error);
//   }
// });


