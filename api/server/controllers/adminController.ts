import {
  checkCreateCompanyBody,
  checkCreateEmployeeBody,
  getValidationResult
} from '../middlewares/validation.mw';

import { createHttpError } from '../utils/helpers';
import { verifyToken, isAdmin } from '../middlewares/authentication.mw';
import * as adminService from '../services/adminService';
import { CreateCompanyReqBody, EmployeeReqBody } from '../types/IRequestBody';

import express from 'express';
import type { NextFunction, Request, Response } from 'express';

export const adminController = express.Router();

adminController.use(verifyToken());
adminController.use(isAdmin());

adminController.post('/create',
  checkCreateCompanyBody(),
  getValidationResult(),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateCompanyReqBody = req.body;
      const company = await adminService.createCompany(data);

      if (!company) {
        throw createHttpError(404, 'Company not created!');
      }
      
      return res.status(200).json(company);
    } catch (error: unknown) {
      next(error);
    }
  });

adminController.get('/allCompanies',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const companies = await adminService.getAllCompanies();
      
      return res.status(200).json(companies);
    } catch (error: unknown) {
      next(error);
    }
  });

adminController.post('/employees/create',
  checkCreateEmployeeBody(),
  getValidationResult(),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const companyId = req.query.companyId as string;
      const employeeData: EmployeeReqBody = req.body;

      if (employeeData.password !== employeeData.repeatPassword) {
        throw createHttpError(400, 'Passwords do not match!');
      }

      const newEmployee = await adminService.addEmployeeToCompany(companyId, employeeData);

      if (!newEmployee) {
        throw createHttpError(404, 'Employee not created!');
      }
      
      res.status(200).json(newEmployee);
    } catch (error: unknown) {
      next(error);
    }
  });


adminController.get('/:companyId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { companyId } = req.params;

      const company = await adminService.getCompanyById(companyId);
      
      if (!company) {
        throw createHttpError(404, 'Company not found!');
      }

      return res.status(200).json(company);
    } catch (error: unknown) {
      next(error)
    }
  });
