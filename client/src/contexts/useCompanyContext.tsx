import { ChildrenProps } from '../types/interface/props-interface';
import { ApiSuccess, ComapnyCommon, Part } from '../types/interface/core-interface';
import { getCompanyById } from '../services/companyService';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuthContext } from './useAuthContext';


interface CompanyData extends ComapnyCommon {
  parts: Part[]
}

const defaultValue: CompanyData = {
  id: "",
  name: "",
  email: "",
  imageUrl: "",
  info: "",
  location: "",
  parts: []
}

interface CompanyContextType {
  company: CompanyData,
  parts: Part[],
  isLoading: boolean,
  addPart: (part: Part) => void,
}

const defaultContextValue: CompanyContextType = {
  company: defaultValue,
  parts: [],
  isLoading: true,
  addPart: (): void => { }
}

const CompanyContext = createContext<CompanyContextType>(defaultContextValue);

export const CompanyProvider: React.FC<ChildrenProps> = ({ children }) => {
  const { user } = useAuthContext();

  const [company, setCompany] = useState<CompanyData>(defaultValue);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    if (user && user.companyId) {
      getCompanyById(user.companyId)
        .then(res => {
          if (res.statusCode === 200) {
            setCompany((res as ApiSuccess).payload);
            setIsLoading(false);
          }
        })
        .catch(error => {
          console.error((error as Error).message);
        })
    }
  }, [user]);

  const addPart = (part: Part): void => {
    setCompany(prev => ({
      ...prev,
      parts: [...prev.parts, part]
    }))
  }

  const contextValue = {
    company,
    parts: company.parts,
    isLoading,
    addPart
  }

  return (
    <CompanyContext.Provider value={contextValue}>
      {children}
    </CompanyContext.Provider>
  );
}

export const useCompanyContext = () => {
  const companyState = useContext(CompanyContext);

  if (!companyState) {
    throw new Error("useCompanyContext must be used within an CompanyProvider!");
  }

  return companyState;
};