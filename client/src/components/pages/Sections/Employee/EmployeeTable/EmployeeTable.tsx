import styles from './EmployeeTable.style';

import BaseText from '../../../../../components/common/BaseText/BaseText';
import NoDataMsg from '../../../../../components/common/NoDataMsg/NoDataMsg';
import AppLoader from '../../../../../components/common/Loader/AppLoader';
import EmployeeCardList from '../EmployeeCardList/EmployeeCardList'; 

import { getFlexBasis } from '../../../../../utils/UIHelper';
import { useSearchContext } from '../../../../../contexts/useSearchContext';
import { filteredBySearchQuery } from '../../../../../utils/helperFunctions';
import { useCurrentCompanyContext } from '../../../../../contexts/useCurrentCompanyContext';

import { View } from 'react-native';
import { useMemo } from 'react';

const columns = ['Name', 'Email', 'Role', 'Edit'];

const EmployeeTable = () => {
  const { searchQuery } = useSearchContext();
  const { getEmployees } = useCurrentCompanyContext();

  const employees = getEmployees();
  // const params = useLocalSearchParams<CompanyIdParams>();

  // const filteredEmployees = useMemo(() => {
  //     return filteredBySearchQuery(employees, searchQuery)
  // }, [employees, searchQuery]);

  const getEmployeeData = () => (
    employees && employees.length > 0
      ? <EmployeeCardList employees={employees} />
      : <NoDataMsg />
  )

  return (
    <>
      <View style={styles.header}>
        {columns.map((column, index) => (
          <BaseText
            key={`${index} ${column}`}
            style={[styles.titleHeader, getFlexBasis(columns.length)]}
          >
            {column}
          </BaseText>
        ))}
      </View>

      {getEmployeeData()}
    </>
  )
}

export default EmployeeTable;
