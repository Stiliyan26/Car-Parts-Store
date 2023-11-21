import {
  checkCreateCompanyBody,
  checkCreateEmployeeBody,
  getValidationResult
} from '../middlewares/validation.mw';

import * as companyRepo from '../repos/companyRepo';
import { createHttpError } from '../utils/helpers';
import { verifyToken, isAdmin } from '../middlewares/authentication.mw';

import express from 'express';
import type { NextFunction, Request, Response } from 'express';

export const adminController = express.Router();

interface CreateCompanyBody {
  id: string
  name: string,
  email: string,
  info: string,
  imageUrl: string,
  location: string,
};

adminController.use(verifyToken());
adminController.use(isAdmin());

adminController.post('/create',
  checkCreateCompanyBody(),
  getValidationResult(),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateCompanyBody = req.body;
      const company = await companyRepo.createCompany(data);

      return res.status(200).json(company);
    } catch (error: unknown) {
      next(error);
    }
  });

adminController.get('/allCompanies', 
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const companies = await companyRepo.allCompanies();
      
      return res.status(200).json(companies);
    } catch (error) {
      next(error);
    }
  });

interface CreateEmployeeBody {
  name: string,
  email: string,
  role: string,
  password: string,
  repeatPassword: string
};

adminController.post('/employees/create',
  checkCreateEmployeeBody(),
  getValidationResult(),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const companyId = req.query.companyId as string;
      const employeeData: CreateEmployeeBody = req.body;
      
      if (employeeData.password !== employeeData.repeatPassword) {
        throw createHttpError(400, 'Passwords do not match!');
      }

      const newEmployee = await companyRepo.addEmployeeToCompany(companyId, employeeData);

      if (!newEmployee) {
        throw createHttpError(404, 'Employee not created!');
      }

      res.status(200).json(newEmployee);
    } catch (error) {
      next(error);
    }
  });


adminController.get('/:companyId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { companyId } = req.params;

      const company = await companyRepo.getCompanyById(companyId);

      if (!company) {
        throw createHttpError(404, 'Company not found!');
      }

      return res.status(200).json(company);
    } catch (error) {
      next(error)
    }
  });
