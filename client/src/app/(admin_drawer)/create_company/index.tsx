import styles from '../../../styles/form.style';

import CustomForm from '../../../components/Form/CustomForm/CustomForm';
import DiagonalAnimation from '../../../components/common/AnimatedImage/DiagonalAnimation';

import { createCompanyFormFields } from '../../../constants/IterableData';
import { createCompanyFormSchema } from '../../../utils/yupSchemas';
import { labelConstants, images } from '../../../constants';
import { COMPANIES_ROUTE } from '../../../constants/routerConstants';
import { formSourcePagesMapper, FormSourcePages } from '../../../types/enums';
import { createCompaniesNavOptions } from '../../../utils/navigationOptions';
import { CreateCompanyData } from '../../../types/interface/IForm';
import { createCompany } from '../../../services/adminService';
import { ApiError, ApiSuccess } from '../../../types/interface/IData';
import { useCompaniesContext } from '../../../contexts/useCompaniesContext';

import { router } from 'expo-router';
import { useState } from 'react';

interface CreateCompanyInitValues {
  name: string,
  email: string,
  imageUrl: string,
  info: string,
  location: string
}

const CreateCompanyForm = () => {
  const { addCompany } = useCompaniesContext();

  const [apiError, setApiError] = useState<string>('');

  const sourcePage = formSourcePagesMapper[FormSourcePages.CREATE_COMPANY];

  const initialValues: CreateCompanyInitValues = {
    name: '',
    email: '',
    imageUrl: '',
    info: '',
    location: ''
  }

  const animationComponent = <DiagonalAnimation
    source={images.airplane}
    dynamicStyles={styles.image}
  />

  async function handleCreateCompany(data: CreateCompanyInitValues): Promise<boolean> {
    const companyData: CreateCompanyData = {
      name: data.name,
      email: data.email,
      info: data.info,
      imageUrl: data.imageUrl,
      location: data.location,
    }

    try {
      const response = await createCompany(companyData);
      
      if (response.statusCode === 200) {
        setApiError('');
        addCompany((response as ApiSuccess).payload);

        router.push(COMPANIES_ROUTE);

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
      formFields={createCompanyFormFields}
      validationSchema={createCompanyFormSchema}
      apiError={apiError}
      buttonLabel={labelConstants.BTN_CREATE_LABEL}
      onSubmit={handleCreateCompany}
      navOptions={createCompaniesNavOptions}
    />
  )
}

export default CreateCompanyForm;
