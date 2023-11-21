import { FONT } from '../../../constants';

import { Text } from 'react-native';
import { TextProps } from 'react-native/Libraries/Text/Text';

const BaseText: React.FC<TextProps> = ({
  children,
  style
}) => {
  return (
    <Text style={[
      { fontFamily: FONT.ChelaOneRegular},
      style
    ]}>
      {children}
    </Text>
  )
}

export default BaseText;
