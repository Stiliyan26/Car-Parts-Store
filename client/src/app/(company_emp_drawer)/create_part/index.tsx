import styles from '../../../styles/form.style';

import CustomForm from '../../../components/Form/CustomForm/CustomForm';
import RotationAnimation from '../../../components/common/AnimatedImage/RotationAnimation';

import { createPartFormFields } from '../../../constants/IterableData';
import { createPartFormSchema } from '../../../utils/yupSchemas';
import { labelConstants, images } from '../../../constants';
import { formSourcePagesMapper, FormSourcePages } from '../../../types/enums';
import { createPartNavOptions } from '../../../utils/navigationOptions';
import { COMPANY_EMP_DASHBOARD } from '../../../constants/routerConstants';
import { Part } from '../../../types/interface/IData';
import { generateId } from '../../../utils/helperFunctions';
import useEmployeeData from '../../../hooks/useEmployeeData';

import { router } from 'expo-router';

interface CreatePartInitValues {
    name: string,
    imageUrl: string,
    description: string,
    pricePerPiece: string,
    quantity: string
}

const CreatePartForm = () => {
    const { company } = useEmployeeData();

    const sourcePage = formSourcePagesMapper[FormSourcePages.CREATE_PART];

    const initialValues: CreatePartInitValues = {
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

    async function handleCreatePart(data: CreatePartInitValues): Promise<boolean> {
        const part: Part = {
            id: generateId(),
            name: data.name,
            imageUrl: data.imageUrl,
            description: data.description,
            pricePerPiece: data.pricePerPiece,
            quantity: data.quantity
        };
        //Change
        //addPartToCompany(part, company?.id);

        router.push(COMPANY_EMP_DASHBOARD);

        return true;
    }

    return (
        <CustomForm
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
