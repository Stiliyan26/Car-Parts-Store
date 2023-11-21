import styles from '../../../styles/form.style';

import CustomForm from '../../../components/Form/CustomForm/CustomForm';
import LevitationAnimation from '../../../components/common/AnimatedImage/LevitationAnimation';

import { useAuthContext } from '../../../contexts/useAuthContext';
import { loginFormFields } from '../../../constants/IterableData';
import { loginFormSchema } from '../../../utils/yupSchemas';
import { labelConstants, images } from '../../../constants';
import {
  COMPANIES_ROUTE,
  COMPANY_EMP_DASHBOARD,
} from '../../../constants/routerConstants';
import { FormSourcePages, formSourcePagesMapper } from '../../../types/enums';
import { loginNavOptions } from '../../../utils/navigationOptions';
import { getUserByEmailAsync } from '../../../services/authService';
import { LoginData } from '../../../types/interface/IForm';
import { ApiError, ApiSuccess } from '../../../types/interface/IData';

import { router } from 'expo-router';
import { useState } from 'react';

interface LoginInitValues {
  email: string;
  password: string;
}

const Login = () => {
  const { login } = useAuthContext();

  const [apiError, setApiError] = useState<string>('');

  const sourcePage = formSourcePagesMapper[FormSourcePages.LOGIN];

  const initialValues: LoginInitValues = {
    email: '',
    password: '',
  };

  async function handleLogin(data: LoginInitValues): Promise<boolean> {
    const loginData: LoginData = {
      email: data.email,
      password: data.password
    };

    try {
      const response = await getUserByEmailAsync(loginData);

      if (response.statusCode === 200) {
        setApiError('');
        await login((response as ApiSuccess).payload);

        const payload = (response as ApiSuccess).payload;
        
        if (payload.isAdmin) {
          router.replace(COMPANIES_ROUTE);
        } else {
          router.replace(COMPANY_EMP_DASHBOARD);
        }

        return true;
      } else if (response.statusCode === 401) {
        setApiError((response as ApiError).errorMsg);
      }
    } catch (error) {
      console.error((error as Error).message);
    }

    return false;
  }

  const animationComponent = (
    <LevitationAnimation source={images.user} dynamicStyles={styles.image} />
  );

  return (
    <CustomForm
      sourcePage={sourcePage}
      initialValues={initialValues}
      animationComponent={animationComponent}
      formFields={loginFormFields}
      validationSchema={loginFormSchema}
      buttonLabel={labelConstants.BTN_LOGIN_LABEL}
      apiError={apiError}
      onSubmit={handleLogin}
      navOptions={loginNavOptions}
    />
  );
};

export default Login;
