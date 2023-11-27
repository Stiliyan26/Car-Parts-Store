import styles from './EmployeeSection.style';

import CustomButton from '../../../../common/CustomButton/CustomButton';

import EmployeeTable from '../EmployeeTable/EmployeeTable';
import BaseText from '../../../../common/BaseText/BaseText';

import { CompanyIdParams } from '../../../../../types/type/ParamTypes';
import { CREATE_EMPLOYEE_ROUTE } from '../../../../../constants/routerConstants';

import {
  View
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

const EmployeeSection = () => {
  const { companyId } = useLocalSearchParams<CompanyIdParams>();

  function handleNavigateToCreateEmployee() {
    router.push({
      pathname: CREATE_EMPLOYEE_ROUTE,
      params: { companyId }
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.sectionNameContainer}>
        <BaseText style={styles.sectionName}>
          Employee Section
        </BaseText>

        <CustomButton
          textContent={'Create Employee'}
          onPress={handleNavigateToCreateEmployee}
        />
      </View>

      <EmployeeTable />
    </View>
  )
}

export default EmployeeSection;
