import styles from './PartsReports.style';

import HeaderForList from '../../../common/HeaderForList/HeaderForList';
import BaseText from '../../../../components/common/BaseText/BaseText';

import { View } from 'react-native';

const PartsReports = () => {
    return (
        <View style={styles.container}>
            <HeaderForList
                headerTitle='Reports'
            />
            
            <BaseText>
                Parts Reports
            </BaseText>
        </View>
    )
}

export default PartsReports;
