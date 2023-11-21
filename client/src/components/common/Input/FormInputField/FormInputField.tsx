import LeftImageEnhancedInput from "../LeftImageEnhancedInput/LeftImageEnhancedInput";

import { COLORS } from "../../../../constants";
import {
  ImageSourcePropType,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";

export interface FormInputProps {
  placeholder: string;
  dynamicStyle?: {};
  secureTextEntry: boolean | undefined;
  keyboardType: KeyboardTypeOptions | undefined;
  icon: ImageSourcePropType;
  iconStyle: {};
  onChangeText: ((text: string) => void) | undefined;
  onBlur:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  onFocus:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  value: string | undefined;
}

const FormInputField: React.FC<FormInputProps> = ({
  placeholder,
  dynamicStyle = { borderColor: COLORS.defaultBorderColor },
  secureTextEntry = false,
  keyboardType = "default",
  icon,
  iconStyle,
  onChangeText,
  onBlur,
  onFocus,
  value,
}) => {
  return (
    <LeftImageEnhancedInput
      dynamicStyle={dynamicStyle}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      icon={icon}
      iconStyle={iconStyle}
      onChangeText={onChangeText}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
    />
  );
};

export default FormInputField;
