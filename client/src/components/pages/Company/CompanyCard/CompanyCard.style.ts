import { COLORS, FONT, SIZES, SHADOWS } from '../../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: SIZES.medium,
        margin: 10,
        borderRadius: SIZES.small,
        flexDirection: 'row',
        alignItems: 'center',
        ...SHADOWS.small,
    },
    logoContainer: {
        width: 60,
        height: 60,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.small
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: SIZES.xSmall,
    },
    textContainer: {
        marginHorizontal: SIZES.medium,
    },
    companyName: {
        marginBottom: 3
    },
    location: {
        color: COLORS.darkGray
    }
});

export default styles;