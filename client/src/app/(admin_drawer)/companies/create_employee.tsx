import styles from '../../../styles/form.style';

import CustomForm from '../../../components/Form/CustomForm/CustomForm';
import LevitationAnimation from '../../../components/common/AnimatedImage/LevitationAnimation';

import { createUserFormFields } from '../../../constants/IterableData';
import { createEmployeeFormSchema } from '../../../utils/yupSchemas';
import { CompanyIdParams } from '../../../types/type/ParamTypes';
import { labelConstants, images } from '../../../constants';
import { COMPANIES_DETAILS_ROUTE } from '../../../constants/routerConstants';
import { formSourcePagesMapper, FormSourcePages } from '../../../types/enums';
import { createEmployeeNavOptions } from '../../../utils/navigationOptions';
import { CreateEmployeeData } from '../../../types/interface/form-interface';
import { createEmployee } from '../../../services/adminService';
import { ApiError, ApiSuccess } from '../../../types/interface/core-interface';
import { useCurrentCompanyContext } from '../../../contexts/useCurrentCompanyContext';

import { useLocalSearchParams, router } from 'expo-router';
import { useState } from 'react';

const CreateEmployeeForm = () => {
  const { addEmployee } = useCurrentCompanyContext();

  const [apiError, setApiError] = useState<string>('');

  const { companyId } = useLocalSearchParams<CompanyIdParams>();

  const sourcePage = formSourcePagesMapper[FormSourcePages.CREATE_EMPLOYEE];

  const initialValues: CreateEmployeeData = {
    name: '',
    email: '',
    role: '',
    password: '',
    repeatPassword: '',
  }

  const animationComponent = <LevitationAnimation
    source={images.user}
    dynamicStyles={styles.image}
  />

  async function handleCreateCompany(newEmployee: CreateEmployeeData): Promise<boolean> {
    try {
      const response = await createEmployee(companyId, newEmployee);

      if (response.statusCode === 200) {
        setApiError('');
        addEmployee((response as ApiSuccess).payload);

        router.push(COMPANIES_DETAILS_ROUTE(companyId));

        return true;
      } else if (response.statusCode === 409) {
        setApiError((response as ApiError).errorMsg);
      }
    } catch (error) {
      console.error((error as Error).message);
    }

    return false;
  }

  return (
    <CustomForm
      sourcePage={sourcePage}
      initialValues={initialValues}
      animationComponent={animationComponent}
      formFields={createUserFormFields}
      validationSchema={createEmployeeFormSchema}
      apiError={apiError}
      buttonLabel={labelConstants.BTN_CREATE_LABEL}
      onSubmit={handleCreateCompany}
      navOptions={createEmployeeNavOptions}
    />
  )
}

export default CreateEmployeeForm;
