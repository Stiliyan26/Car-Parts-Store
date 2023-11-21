import styles from './LeftImageEnhancedInputProps.style';

import InputField from '../InputField/InputField';
import { InputFieldProps } from '../../../../types/interface/IProps';

import { View, Image, ImageSourcePropType } from 'react-native';

export interface LeftImageEnhancedInputProps extends InputFieldProps {
    icon: ImageSourcePropType,
    iconStyle: {}
};

const LeftImageEnhancedInput: React.FC<LeftImageEnhancedInputProps> = ({
    icon,
    iconStyle,
    dynamicStyle,
    ...props
}) => (
    <View style={styles.inputContainer}>
        <Image source={icon} style={[styles.icon, iconStyle]} />

        <InputField
            dynamicStyle={dynamicStyle}
            {...props} 
        />
    </View>
)

export default LeftImageEnhancedInput;
