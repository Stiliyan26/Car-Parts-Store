
import BaseText from '../BaseText/BaseText';

import { getFlexBasis } from '../../../utils/UIHelper';
import { StyleProp, TextStyle } from 'react-native';

export interface RowWrapperProps {
  values: string[],
  columnsLen: number,
  dynamicStyles: StyleProp<TextStyle>
}
const RowWrapper: React.FC<RowWrapperProps> = ({
  values,
  columnsLen,
  dynamicStyles
}) => {
  return (
    values.map((value, index) => (
      <BaseText
        key={`${value} ${index}`}
        style={[
          dynamicStyles,
          getFlexBasis(columnsLen)
        ]}
      >
        {value}
      </BaseText>
    ))
  )
}

export default RowWrapper;