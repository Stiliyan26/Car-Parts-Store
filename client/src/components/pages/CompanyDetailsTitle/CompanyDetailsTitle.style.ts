import { COLORS, FONT, SIZES, SHADOWS } from '../../../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: SIZES.xxxLarge,
        gap: SIZES.small,
        overflow: 'hidden'
    },
    imageContainer: {
        alignItems: 'center',
        width: 80,
        height: 80,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium,
        ...SHADOWS.small,
    },
    logoImage: {
        width: '100%',
        height: '100%',
        borderRadius: SIZES.medium
    },
    title: {
        fontSize: SIZES.xLarge,
        color: COLORS.secondary
    },
    infoRowWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    }
});

export default styles;