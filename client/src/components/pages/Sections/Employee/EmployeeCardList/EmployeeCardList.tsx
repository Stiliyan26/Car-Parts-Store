import EmployeeCard from '../EmployeeCard/EmployeeCard';
import CardList from '../../../../../components/common/CardList/CardList';

import { EmployeeData } from '../../../../../types/interface/core-interface';

interface EmployeeCardListProps {
  employees: EmployeeData[];
}

interface EmployeeWithIndex {
  id: string,
  empInfo: Omit<EmployeeData, 'id'>,
  index: number
}

const EmployeeCardList: React.FC<EmployeeCardListProps> = ({ employees }) => {
  const WrappedEmployeeList = CardList(EmployeeCard);


  const employeesWithIndex: EmployeeWithIndex[] = employees.map((employee, index) => {
    const { id, ...empInfoWithoutId } = employee;

    return {
      id,
      empInfo: empInfoWithoutId,
      index
    }
  })

  return <WrappedEmployeeList data={employeesWithIndex} />
}

export default EmployeeCardList;
