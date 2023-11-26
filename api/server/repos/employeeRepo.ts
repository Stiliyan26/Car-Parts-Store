import * as roleRepo from '../repos/roleRepo';

import { EmployeeData } from '../types/core.interfaces';
import { hashPassword } from '../utils/helpers';

import { db } from '../utils/db.server';

export const getEmployeeByEmailAndPassword = async (
  email: string,
  password: string
): Promise<EmployeeData | null> => {
  return await db.employee.findFirst({
    where: {
      email,
      password: hashPassword(password)
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: {
        select: { 
          name: true
        }
      },
      companyId: true
    }
  }).then(emp => {
    if (emp) {
      return { ...emp, role: emp.role.name };
    } 

    return null;
  })
}

interface CreateEmployeeData {
  name: string,
  email: string,
  role: string,
  password: string
}

interface CreateEmployeeResult {
  name: string,
  email: string,
  role: string
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
