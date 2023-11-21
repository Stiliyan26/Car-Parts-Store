import { useAuthContext } from '../contexts/useAuthContext';
import { useCompanyContext } from '../contexts/useCompanyContext';

const useEmployeeData = () => {
    const { user } = useAuthContext();
    const { getEmployeeByEmail, getCompanyByEmpEmail } = useCompanyContext();

    const company = getCompanyByEmpEmail(user.email);
    const employee = getEmployeeByEmail(user.email);

    return {
        company,
        employee
    }
}

export default useEmployeeData;
