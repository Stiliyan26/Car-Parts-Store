import { COLORS, SHADOWS, SIZES } from '../../../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: COLORS.white,
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        flexDirection: 'row',
        ...SHADOWS.small,
        alignItems: 'center',
    },
    logoContainer: {
        width: 60,
        height: 60,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.white,
        ...SHADOWS.small,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: SIZES.small,
    },
    infoItem: {
        color: COLORS.darkestGray,
        textAlign: 'center'
    },
    infoItemImg: {
        color: COLORS.darkestGray,
        alignItems: 'center',
    }
});

export default styles;