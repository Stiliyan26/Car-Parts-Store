import { COLORS, SIZES, SHADOWS } from '../../../../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.small,
        margin: 10,
        padding: SIZES.medium,
        flexDirection: 'row',
        ...SHADOWS.small,
    },
    columnStyle: {
        textAlign: 'center',
        fontSize: SIZES.small + 2,
        color: COLORS.darkestGray
    },
    listStyle: {
        borderRadius: SIZES.medium,
    }
});

export default styles;