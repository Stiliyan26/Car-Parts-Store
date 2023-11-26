import { useAuthContext } from '../contexts/useAuthContext';
import { useOldCompanyContext } from '../contexts/useOldCompanyContext';

const useEmployeeData = () => {
    const { user } = useAuthContext();
    const { getEmployeeByEmail, getCompanyByEmpEmail } = useOldCompanyContext();

    const company = getCompanyByEmpEmail(user.email);
    const employee = getEmployeeByEmail(user.email);

    return {
        company,
        employee
    }
}

export default useEmployeeData;
