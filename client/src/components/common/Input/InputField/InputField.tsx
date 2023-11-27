import styles from './inputField.style';

import { InputFieldProps } from '../../../../types/interface/props-interface';
import { COLORS } from '../../../../constants';

import { TextInput } from 'react-native';

const InputField: React.FC<InputFieldProps> = ({
  dynamicStyle = { borderColor: COLORS.defaultBorderColor },
  ...props
}) => {
  return (
    <TextInput
      placeholderTextColor={COLORS.gray2}
      scrollEnabled={false}
      style={[
        styles.input,
        dynamicStyle
      ]}
      {...props}
    />
  )
}

export default InputField;
