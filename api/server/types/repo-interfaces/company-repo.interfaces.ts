import { CompanyCommon, EmployeeCommon } from '../common.interfaces'
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
  employees?: GetEmployeeData[],
  parts?: GetPartResult[]
}
//EMPLOYEE INTERFACES //

//GET EMPLOYEE
export interface GetEmployeeData extends EmployeeCommon {
  id: string
}
//CREATE EMPLOYEE
export interface CreateEmployeeData extends EmployeeCommon {
  password: string
}

//CREATE EMPLOYEE
export interface CreateEmployeeResult extends EmployeeCommon {
  id: string
}

// PARTS INTERFACES //

//GET PART
export interface GetPartResult {
  id: string,
  imageUrl: string,
  name: string,
  pricePerPiece: number,
  quantity: number
}