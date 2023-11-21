import styles from './ErrorField.style';

import BaseText from '../BaseText/BaseText';
import { StyleProp, TextStyle } from 'react-native';

export interface ErrorFiledProps {
  errorMessage: string | undefined,
  dynamicStyles?: StyleProp<TextStyle> | undefined
}

const ErrorField: React.FC<ErrorFiledProps> = ({
  errorMessage = 'Error occurred',
  dynamicStyles= {}
}) => {
  return (
    <BaseText style={[styles.errorContainer, dynamicStyles]}>
      {errorMessage}
    </BaseText>
  );
};

export default ErrorField;
