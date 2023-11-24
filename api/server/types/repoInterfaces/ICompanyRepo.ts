import { CompanyCommon } from '../IData'
// COMPANY INTERFACES

//CREATE COMPANY
export interface CreateCompanyResult extends CompanyCommon {
  id: string,
  email: string,
  info: string
};
//GET ALL COMPANIES
export interface GetAllCompanyResult extends CompanyCommon {
  id: string
}

//GET COMPANY BY ID
export interface GetCompanyByIdResult extends CompanyCommon {
  id: string,
  email: string,
  info: string,
  employees: GetEmployeeData[]
}
//EMPLOYEE INTERFACES //
export interface EmployeeDataCommon {
  name: string,
  email: string,
  role: string
}
//GET EMPLOYEE
export interface GetEmployeeData extends EmployeeDataCommon {
  id: string
}
//CREATE EMPLOYEE
export interface CreateEmployeeData extends EmployeeDataCommon {
  password: string
}

export interface CreateEmployeeResult extends EmployeeDataCommon {
  id: string
}