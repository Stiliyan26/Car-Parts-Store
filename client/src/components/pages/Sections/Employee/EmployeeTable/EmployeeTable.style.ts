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
    },
    infoRow: {
        flexDirection: 'row',
        paddingVertical: SIZES.small - 5,
        alignItems: 'center',
    },
    infoText: {
        fontSize: SIZES.small + 2,
        color: COLORS.gray3,
        textAlign: 'center',
    }
});

export default styles;