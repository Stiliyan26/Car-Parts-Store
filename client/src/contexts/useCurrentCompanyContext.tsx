import { getCompanyById } from '../services/adminService';
import { ApiSuccess, CompanyData, EmployeeData } from '../types/interface/IData';
import { ChildrenProps } from '../types/interface/IProps';

import { createContext, useContext, useEffect, useState } from 'react';

interface CurrentCompanyContextType {
  company: CompanyData | undefined,
  setCompanyId: (companyId: string) => void,
  getEmployees: () => EmployeeData[] | undefined,
  addEmployee: (employeeData: EmployeeData) => void
}

const defaultContextValue: CurrentCompanyContextType = {
  company: undefined,
  setCompanyId: () => { },
  getEmployees: () => { return [] },
  addEmployee: () => { }
};

const CurrentCompanyContext = createContext<CurrentCompanyContextType>(defaultContextValue);

export const CurrentCompanyProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [company, setCompany] = useState<CompanyData | undefined>(undefined);
  const [currentCompanyId, setCurrentCompanyId] = useState<string>('');

  const setCompanyId = (companyId: string) => {
    setCurrentCompanyId(companyId);
  };

  const getEmployees = () => company?.employees;

  const addEmployee = (employeeData: EmployeeData) => {
    setCompany(currentCompany => {
      if (!currentCompany) {
        return currentCompany;
      }

      let companyToUpdate = { ...currentCompany };

      const currentEmployees = companyToUpdate.employees;

      const exists = currentEmployees
        .some(emp => emp.email === employeeData.email);

      if (exists) {
        return currentCompany;
      }

      companyToUpdate = {
        ...companyToUpdate,
        employees: [...currentEmployees, employeeData]
      }

      return companyToUpdate;
    })
  }

  useEffect(() => {
    if (currentCompanyId) {
      getCompanyById(currentCompanyId)
        .then(res => {
          if (res.statusCode === 200) {
            setCompany((res as ApiSuccess).payload);
          }
        })
        .catch(error => {
          console.error((error as Error).message);
        })
    } else {
      setCompany(undefined);
    }
  }, [currentCompanyId]);

  const contextValue: CurrentCompanyContextType = {
    company,
    setCompanyId,
    getEmployees,
    addEmployee
  };

  return (
    <CurrentCompanyContext.Provider value={contextValue}>
      {children}
    </CurrentCompanyContext.Provider>
  );
};

export const useCurrentCompanyContext = () => {
  const currentCompanyContext = useContext(CurrentCompanyContext);

  if (!currentCompanyContext) {
    throw new Error('useCurrentCompanyContext must be used within an CurrentCompanyProvider!');
  }

  return currentCompanyContext;
};
