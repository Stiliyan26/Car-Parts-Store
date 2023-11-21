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
import { CreateEmployeeData } from '../../../types/interface/IForm';
import { createEmployee } from '../../../services/adminService';
import { ApiError, ApiSuccess } from '../../../types/interface/IData';
import { useCurrentCompanyContext } from '../../../contexts/useCurrentCompanyContext';
import { useAuthContext } from '../../../contexts/useAuthContext';

import { useLocalSearchParams, router } from 'expo-router';
import { useState } from 'react';

interface CreateUserInitValues {
  name: string,
  email: string,
  role: string,
  password: string,
  repeatPassword: string
}

const CreateEmployeeForm = () => {
  const { setNewTokens } = useAuthContext(); 
  const { addEmployee } = useCurrentCompanyContext();

  const [apiError, setApiError] = useState<string>('');

  const { companyId } = useLocalSearchParams<CompanyIdParams>();

  const sourcePage = formSourcePagesMapper[FormSourcePages.CREATE_EMPLOYEE];

  const initialValues: CreateUserInitValues = {
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

  async function handleCreateCompany(data: CreateUserInitValues): Promise<boolean> {
    const newEmployee: CreateEmployeeData = {
      name: data.name,
      email: data.email,
      role: data.role,
      password: data.password,
      repeatPassword: data.repeatPassword
    }

    try {
      const response = await createEmployee(companyId, newEmployee, setNewTokens);

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
