import { CompanyCommon, EmployeeCommon, PartCommon } from './common.interfaces';

export interface EmployeeReqBody extends EmployeeCommon {
  password: string,
  repeatPassword: string
}

export interface CreateCompanyReqBody extends CompanyCommon {
  email: string,
  info: string,
};

export interface CreatePartReqBody extends PartCommon {
  imageUrl: string,
  description: string,
  quantity: number,
  companyId: string
}