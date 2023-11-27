import LeftImageEnhancedInput from '../LeftImageEnhancedInput/LeftImageEnhancedInput';

import {
  ImageSourcePropType,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';

export interface FormInputProps {
  inputInfo: {
    placeholder: string;
    secureTextEntry: boolean | undefined;
    keyboardType: KeyboardTypeOptions | undefined;
    icon: ImageSourcePropType;
    value: string | undefined;
  },
  styleInfo: {
    dynamicStyle?: {};
    iconStyle: {};
  }
  onChangeText: ((text: string) => void) | undefined;
  onBlur:
  | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
  | undefined;
  onFocus:
  | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
  | undefined;
}

const FormInputField: React.FC<FormInputProps> = ({
  inputInfo,
  styleInfo,
  onChangeText,
  onBlur,
  onFocus,
}) => {
  return (
    <LeftImageEnhancedInput
      styleInfo={styleInfo}
      {...inputInfo}
      onChangeText={onChangeText}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

export default FormInputField;
