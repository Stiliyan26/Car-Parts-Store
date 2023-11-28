import {
  checkCreateCompanyBody,
  checkCreateEmployeeBody,
  getValidationResult
} from '../middlewares/validation.mw';
import { verifyToken, isAdmin } from '../middlewares/authentication.mw';
import * as adminService from '../services/adminService';
import { CreateCompanyReqBody, EmployeeReqBody } from '../types/request.interfaces';
import {
  BadRequestException,
  NotFoundException,
  CreationFailedException
} from '../exceptions';

import express from 'express';
import type { NextFunction, Request, Response } from 'express';

export const adminController = express.Router();


const companiesUrl = '/companies';

adminController.use(verifyToken());
adminController.use(isAdmin());

adminController.post(`${companiesUrl}/create`,
  checkCreateCompanyBody(),
  getValidationResult(),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateCompanyReqBody = req.body;
      const company = await adminService.createCompany(data);

      if (!company) {
        throw new NotFoundException(data.name);
      }

      return res.status(201).json(company);
    } catch (error: unknown) {
      next(error);
    }
  });

adminController.get(`${companiesUrl}/all`,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const companies = await adminService.getAllCompanies();

      return res.status(200).json(companies);
    } catch (error: unknown) {
      next(error);
    }
  });

adminController.post(`${companiesUrl}/employees/create`,
  checkCreateEmployeeBody(),
  getValidationResult(),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const companyId = req.query.companyId as string;
      const employeeData: EmployeeReqBody = req.body;

      if (employeeData.password !== employeeData.repeatPassword) {
        throw new BadRequestException('Passwords do not match!');
      }

      const newEmployee = await adminService.addEmployeeToCompany(companyId, employeeData);

      if (!newEmployee) {
        throw new CreationFailedException('Employee');
      }

      res.status(201).json(newEmployee);
    } catch (error: unknown) {
      next(error);
    }
  });


adminController.get(`${companiesUrl}/:companyId`,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { companyId } = req.params;

      const company = await adminService.getCompanyWithEmployeesById(companyId);

      if (!company) {
        throw new NotFoundException('Company');
      }

      return res.status(200).json(company);
    } catch (error: unknown) {
      next(error)
    }
  });
