import styles from './HeaderForList.style';

import BaseText from '../BaseText/BaseText';

import { TouchableOpacity, View } from 'react-native';

interface HeaderForListProps {
    headerTitle: string
}

const HeaderForList: React.FC<HeaderForListProps> = ({
    headerTitle = ''
}) => {
    return (
        <View style={styles.header}>
            <BaseText style={styles.headerTitle}>
                {headerTitle}
            </BaseText>

            <TouchableOpacity>
                <BaseText style={styles.headerBtn}>
                    Show all
                </BaseText>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderForList;
