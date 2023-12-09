import styles from '../../../styles/form.style';

import FormTemplate from '../../../components/Form/FormTemplate/FormTemplate';
import RotationAnimation from '../../../components/common/AnimatedImage/RotationAnimation';

import { createPartFormFields } from '../../../constants/IterableData';
import { createPartFormSchema } from '../../../utils/yupSchemas';
import { labelConstants, images } from '../../../constants';
import { formSourcePagesMapper, FormSourcePages } from '../../../types/enums';
import { createPartNavOptions } from '../../../utils/navigationOptions';
import { COMPANY_EMP_DASHBOARD } from '../../../constants/routerConstants';
import { createPart } from '../../../services/companyService';
import { useCompanyContext } from '../../../contexts/useCompanyContext';
import { ApiSuccess } from '../../../types/interface/core-interface';
import { useAuthContext } from '../../../contexts/useAuthContext';
import { isResponseOk } from '../../../utils/helperFunctions';

import { router } from 'expo-router';

interface CreatePartsInital {
  name: string;
  imageUrl: string;
  description: string;
  pricePerPiece: string;
  quantity: string;
}

const CreatePartForm = () => {
  const { user } = useAuthContext();
  const { addPart } = useCompanyContext();

  const sourcePage = formSourcePagesMapper[FormSourcePages.CREATE_PART];

  const initialValues: CreatePartsInital = {
    name: '',
    imageUrl: '',
    description: '',
    pricePerPiece: '',
    quantity: ''
  }

  const animationComponent = <RotationAnimation
    source={images.partLogo}
    dynamicStyles={styles.image}
  />

  async function handleCreatePart(partData: CreatePartsInital): Promise<boolean> {
    try {
      const response = await createPart({
        ...partData,
        pricePerPiece: parseFloat(partData.pricePerPiece),
        quantity: parseInt(partData.quantity),
        companyId: user?.companyId
      });

      if (isResponseOk(response.statusCode)) {
        addPart((response as ApiSuccess).payload);

        router.push(COMPANY_EMP_DASHBOARD);

        return true;
      } 
    } catch (error) {
      console.error((error as Error).message);
    }

    return false;
  }

  return (
    <FormTemplate
      sourcePage={sourcePage}
      initialValues={initialValues}
      animationComponent={animationComponent}
      formFields={createPartFormFields}
      validationSchema={createPartFormSchema}
      buttonLabel={labelConstants.BTN_CREATE_LABEL}
      onSubmit={handleCreatePart}
      navOptions={createPartNavOptions}
    />
  )
}

export default CreatePartForm;
