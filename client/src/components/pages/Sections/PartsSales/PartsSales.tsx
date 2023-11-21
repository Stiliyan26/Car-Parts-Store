import styles from './PartsSales.style';

import HeaderForList from '../../../common/HeaderForList/HeaderForList';
import BaseText from '../../../../components/common/BaseText/BaseText';

import { View } from 'react-native';

const PartsSales = () => {
    return (
        <View style={styles.container}>
            <HeaderForList
                headerTitle='Sales'
            />
            <BaseText>
                Parts Sales
            </BaseText>
        </View>
    )
}

export default PartsSales;
