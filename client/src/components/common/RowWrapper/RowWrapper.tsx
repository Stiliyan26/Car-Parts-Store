
import BaseText from '../BaseText/BaseText';

import { getFlexBasis } from '../../../utils/UIHelper';
import { StyleProp, TextStyle } from 'react-native';

export interface RowWrapperProps {
    values: string[],
    columns: string[],
    dynamicStyles: StyleProp<TextStyle>
}
const RowWrapper: React.FC<RowWrapperProps> = ({
    values,
    columns,
    dynamicStyles
}) => {
    return (
        values.map((value, index) => (
            <BaseText
                key={`${value} ${index}`}
                style={[
                    dynamicStyles,
                    getFlexBasis(columns.length)
                ]}
            >
                {value}
            </BaseText>
        ))
    )
}

export default RowWrapper;