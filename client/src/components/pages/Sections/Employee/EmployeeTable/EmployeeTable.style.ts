import { COLORS, SIZES } from '../../../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
    },
    titleHeader: {
        textAlign: 'center',
        paddingVertical: SIZES.small,
        fontSize: SIZES.medium,
        color: COLORS.darkestGray,
    }
});

export default styles;