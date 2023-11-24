import * as roleRepo from '../repos/roleRepo';
import { hashPassword } from '../utils/helpers';
import {
  CreateCompanyResult,
  GetAllCompanyResult,
  GetCompanyByIdResult,
  GetEmployeeData,
  CreateEmployeeData,
  CreateEmployeeResult
} from '../types/repoInterfaces/ICompanyRepo';
import { CreateCompanyReqBody } from '../types/IRequestBody';

import { db } from '../utils/db.server';

//import { Prisma } from '.prisma/client';

// type CreateCompanyData = Prisma.Args<typeof db.company, 'create'>['data'];
// type CreateCompanyResult = Prisma.Result<typeof db, Prisma.CompanyCreateArgs, 'create'>['select'];
export const createCompany = async (
  data: CreateCompanyReqBody
): Promise<CreateCompanyResult | null> => {
  return await db.company.create({
    data: {
      name: data.name,
      email: data.email,
      imageUrl: data.imageUrl,
      info: data.info,
      location: data.location,
    },
    select: {
      id: true,
      name: true,
      email: true,
      imageUrl: true,
      info: true,
      location: true
    }
  })
}

export const allCompanies = async (): Promise<GetAllCompanyResult[]> => {
  return await db.company.findMany({
    select: {
      id: true,
      name: true,
      imageUrl: true,
      location: true
    }
  });
}

export const getCompanyById = async (id: string): Promise<GetCompanyByIdResult | null> => {
  return await db.company.findUnique({
    where: {
      id
    },
    select: {
      id: true,
      name: true,
      email: true,
      location: true,
      info: true,
      imageUrl: true,
      employees: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true
        }
      }
    }
  }).then(company => {
    if (company) {
      const changedEmployees = company.employees
        .map(empData => ({
          ...empData,
          role: empData.role.name
        }))

      return { ...company, employees: changedEmployees }
    }

    return null;
  })
}

export const getEmployeesByCompanyId = async (id: string): Promise<GetEmployeeData[] | null> => {
  return await db.company.findUnique({
    where: {
      id
    },
    include: {
      employees: {
        select: {
          id: true,
          name: true,
          email: true,
          role: {
            select: {
              name: true
            }
          }
        }
      }
    }
  }).then(company => {
    if (company) {
      return company.employees.map(emp => ({
        id: emp.id,
        name: emp.name,
        email: emp.email,
        role: emp.role.name
      }));
    } else {
      return null;
    }
  });
}

export const addEmployeeToCompany = async (
  companyId: string,
  employeeData: CreateEmployeeData
): Promise<CreateEmployeeResult | null> => {
  const roleId = await roleRepo.getRoleIdByName(employeeData.role);

  if (roleId) {
    const newEmployee = await db.employee.create({
      data: {
        name: employeeData.name,
        email: employeeData.email,
        password: hashPassword(employeeData.password),
        roleId: roleId,
        companyId: companyId
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: {
          select: {
            name: true,
          }
        }
      }
    })

    return { ...newEmployee, role: newEmployee.role.name };
  }

  return null;
}





