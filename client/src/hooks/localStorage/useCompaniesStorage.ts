import { CompanyDataContext, CompaniesLocalStorage, Employee, Part } from '../../types/interface/IData';

import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useCompaniesStorage = (
    key: string,
    initalValue: {}
) => {
    const [companies, setCompanies] = useState<CompaniesLocalStorage>(initalValue);

    //set initial value 
    useEffect(() => {
        const fetchCompanyData = async () => {
            try {
                const companiesData = await AsyncStorage.getItem(key);

                if (companiesData) {
                    const parsedCompanies: CompaniesLocalStorage = JSON.parse(companiesData);

                    setCompanies(parsedCompanies);
                }
            } catch (error) {
                console.error((error as Error).message);
            }
        }

        fetchCompanyData();
    }, []);

    //Setting async storage after every change
    useEffect(() => {
        const setAsyncStorage = async () => {
            try {
                await AsyncStorage.setItem(key, JSON.stringify(companies));
            } catch (error) {
                console.error((error as Error).message);
            }
        }

        setAsyncStorage();
    }, [companies])

    const addCompany = (companyData: CompanyDataContext) => {
        const companyId = companyData.id;

        try {
            const companyName = companyData.name;

            if (companies[companyName] === undefined) {
                setCompanies(prev => ({
                    ...prev,
                    [companyId]: companyData
                }));
            }
        } catch (error) {
            console.error((error as Error).message);
        }
    }

    //TODO Remove later
    const removeAllCompanies = async () => {
        try {
            await AsyncStorage.removeItem(key);
            setCompanies({});
        } catch (error) {
            console.error((error as Error).message);
        }
    }

    const addEmployeeToCompanyStorage = (empData: Employee, compnayId: string) => {
        setCompanies(currentCompanies => {
            const companyToUpdate = currentCompanies[compnayId];
            const employees = companyToUpdate.employees;

            const exists = employees
                .some(emp => emp.email === empData.email);

            if (exists) {
                return currentCompanies;
            }

            const updatedEmployees = [...employees, empData];

            const updatedCompany = {
                ...companyToUpdate,
                employees: updatedEmployees
            }

            const updatedCompanies = {
                ...currentCompanies,
                [compnayId]: updatedCompany
            }

            return updatedCompanies;
        })
    }

    const addPartToCompanyStorage = (partData: Part, companyId: string | undefined) => {
        if (companyId === undefined) {
            return;
        }

        setCompanies(currentCompanies => {
            let companyToUpdate = currentCompanies[companyId];
            const parts = companyToUpdate.parts;

            const exists = parts
                .find(p => p.name == partData.name);

            if (exists) {
                return currentCompanies;
            }

            const updatedParts = [...parts, partData];

            companyToUpdate = {
                ...companyToUpdate,
                parts: updatedParts
            }

            const updatedCompanies = {
                ...currentCompanies,
                [companyId]: companyToUpdate
            }

            return updatedCompanies;
        })
    }

    return {
        companies,
        addCompany,
        removeAllCompanies,
        addEmployeeToCompanyStorage,
        addPartToCompanyStorage
    } as const;
}

export default useCompaniesStorage;