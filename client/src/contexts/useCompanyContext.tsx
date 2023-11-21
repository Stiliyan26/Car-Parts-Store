import useCompaniesStorage from "../hooks/localStorage/useCompaniesStorage";
import { CompanyDataContext, Employee, Part } from "../types/interface/IData";
import { ChildrenProps } from "../types/interface/IProps";

import { createContext, useContext } from "react";

export interface CompaniesContextType {
  createCompany: (companyData: CompanyDataContext) => void;
  getCompanies: () => CompanyDataContext[];
  companies: {};
  getCompanyById: (id: string) => CompanyDataContext | undefined;
  removeAllCompanies: () => Promise<void>;
  addEmployeeToCompany: (empData: Employee, compnayId: string) => void;
  getCompanyEmployees: (id: string) => Employee[];
  getEmployeeByEmail: (email: string) => Employee | undefined;
  getCompanyByEmpEmail: (email: string) => CompanyDataContext | undefined;
  addPartToCompany: (partData: Part, companyId: string | undefined) => void;
}

const defaultValue = {
  id: "",
  name: "",
  email: "",
  info: "",
  imageUrl: "",
  location: "",
  employees: [],
  parts: [],
};

const defaultContextValue: CompaniesContextType = {
  createCompany: () => { },
  getCompanies: () => {
    return [];
  },
  companies: {},
  getCompanyById: () => {
    return defaultValue;
  },
  removeAllCompanies: async () => { },
  addEmployeeToCompany: () => { },
  getCompanyEmployees: () => {
    return [];
  },
  getEmployeeByEmail: () => {
    return undefined;
  },
  getCompanyByEmpEmail: () => {
    return undefined;
  },
  addPartToCompany: () => { },
};

const CompanyContext = createContext<CompaniesContextType>(defaultContextValue);

const key = "companies";
const initalValue = {};

export const CompanyProvider: React.FC<ChildrenProps> = ({ children }) => {
  const {
    companies,
    addCompany,
    removeAllCompanies,
    addEmployeeToCompanyStorage,
    addPartToCompanyStorage,
  } = useCompaniesStorage(key, initalValue);

  const createCompany = (companyData: CompanyDataContext) => {
    addCompany(companyData);
  };

  const getCompanies = () => {
    const companiesDataArray: CompanyDataContext[] = Object.values(companies);

    return companiesDataArray;
  };

  const getCompanyById = (id: string) => companies[id];

  const addEmployeeToCompany = (empData: Employee, compnayId: string) =>
    addEmployeeToCompanyStorage(empData, compnayId);

  const getCompanyEmployees = (id: string) => {
    const company = getCompanyById(id);

    return company ? company.employees : [];
  };

  const getEmployeeByEmail = (email: string) => {
    const foundCompany = getCompanies().find((c) =>
      c.employees.find((e) => e.email === email)
    );

    if (foundCompany) {
      return foundCompany.employees.find((e) => e.email === email);
    }

    return undefined;
  };

  const getCompanyByEmpEmail = (email: string) => {
    return getCompanies().find((c) =>
      c.employees.find((e) => e.email === email)
    );
  };

  const addPartToCompany = (partData: Part, companyId: string | undefined) =>
    addPartToCompanyStorage(partData, companyId);

  const contextValue: CompaniesContextType = {
    createCompany,
    getCompanies,
    companies,
    getCompanyById,
    removeAllCompanies,
    addEmployeeToCompany,
    getCompanyEmployees,
    getEmployeeByEmail,
    getCompanyByEmpEmail,
    addPartToCompany,
  };

  return (
    <CompanyContext.Provider value={contextValue}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompanyContext = () => {
  const companyState = useContext(CompanyContext);

  if (!companyState) {
    throw new Error(
      "useCompanyContext must be used within an CompanyProvider!"
    );
  }

  return companyState;
};
