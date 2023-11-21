import { Href } from 'expo-router';

//Common
export const LOGIN_ROUTE = '/(auth)/login';

//Application Admin
export const COMPANIES_ROUTE = '/(admin_drawer)/companies';
//change
export const CREATE_EMPLOYEE_ROUTE = '/(admin_drawer)/companies/create_employee';

export const COMPANIES_DETAILS_ROUTE = 
    (companyId: string) => `/(admin_drawer)/companies/${companyId}` as Href<string>;

//Company
export const COMPANY_EMP_DASHBOARD = '/(company_emp_drawer)/dashboard';
