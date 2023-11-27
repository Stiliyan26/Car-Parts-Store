import styles from './LeftImageEnhancedInputProps.style';

import InputField from '../InputField/InputField';
import { InputFieldProps } from '../../../../types/interface/props-interface';

import { View, Image, ImageSourcePropType } from 'react-native';

export interface LeftImageEnhancedInputProps extends InputFieldProps {
  icon: ImageSourcePropType,
  styleInfo: {
    dynamicStyle?: {};
    iconStyle: {};
  }
};

const LeftImageEnhancedInput: React.FC<LeftImageEnhancedInputProps> = ({
  styleInfo,
  ...props
}) => (
  <View style={styles.inputContainer}>
    <Image source={props.icon} style={[styles.icon, styleInfo.iconStyle]} />

    <InputField
      dynamicStyle={styleInfo.dynamicStyle}
      {...props}
    />
  </View>
)

export default LeftImageEnhancedInput;
