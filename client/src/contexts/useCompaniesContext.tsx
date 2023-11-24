import { getAllCompanies } from '../services/adminService';
import { ApiSuccess, CompanyCardData } from '../types/interface/IData';
import { ChildrenProps } from '../types/interface/IProps';

import { createContext, useContext, useEffect, useState } from 'react';

interface CompaniesContextType {
  companies: CompanyCardData[] | undefined,
  addCompany: (companyData: CompanyCardData) => void,
}

const defaultContextValue = {
  companies: [],
  addCompany: () => { },
};

const CompaniesContext = createContext<CompaniesContextType>(defaultContextValue);

export const CompaniesProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [companies, setCompanies] = useState<CompanyCardData[] | undefined>(undefined);

  useEffect(() => {
    getAllCompanies()
      .then(res => {
        if (res.statusCode === 200) {
          setCompanies((res as ApiSuccess).payload);
        }
      })
      .catch(error => {
        console.error((error as Error).message);
      })
  }, []);

  const addCompany = (companyData: CompanyCardData) => {
    setCompanies(prev => {
      if (prev) {
        return [...prev, companyData]
      }

      return prev;
    });
  }

  const contextValue: CompaniesContextType = {
    companies,
    addCompany,
  };

  return (
    <CompaniesContext.Provider value={contextValue}>
      {children}
    </CompaniesContext.Provider>
  );
};

export const useCompaniesContext = () => {
  const companiesContext = useContext(CompaniesContext);

  if (!companiesContext) {
    throw new Error("useCompaniesContext must be used within an CompaniesProvider!");
  }

  return companiesContext;
};
