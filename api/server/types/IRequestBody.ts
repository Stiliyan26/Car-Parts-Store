import { CompanyCommon } from './IData';

export interface EmployeeReqBody {
  name: string,
  email: string,
  role: string,
  password: string,
  repeatPassword: string
}

export interface CreateCompanyReqBody extends CompanyCommon {
  email: string,
  info: string,
};

export interface CreatePartReqBody {
  name: string,
  imageUrl: string,
  description: string,
  pricePerPiece: number,
  quantity: number,
  companyId: string
}