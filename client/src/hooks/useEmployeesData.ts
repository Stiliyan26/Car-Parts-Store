import { useEffect, useState } from 'react';
import { getEmployeesByCompanyId } from '../services/adminService';
import { ApiSuccess, EmployeeData } from '../types/interface/IData';

interface UseEmployeesDataArgs {
  companyId: string;
}

const useEmployeesData = ({ companyId }: UseEmployeesDataArgs)  => {
  const [employees, setEmployees] = useState<EmployeeData[]>([]);

  useEffect(() => {
    getEmployeesByCompanyId(companyId)
      .then(res => {
        if (res.statusCode === 200) {
          setEmployees((res as ApiSuccess).payload);
        }
      })
      .catch(error => {
        console.error((error as Error).message);
      })
  }, []);

  return {
    employees
  }
}

export default useEmployeesData;