import { COLORS, SIZES } from '../../../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray
    },
    drawerContentScrollView: {
        backgroundColor: COLORS.lightPurple,
    },
    drawerBackgroundImg: {
        padding: SIZES.large,
    },
    logo: {
        height: 80,
        width: 80,
        borderRadius: SIZES.xxxLarge,
        marginBottom: SIZES.small - 2,
    },
    primaryText: {
        color: COLORS.white,
        fontSize: SIZES.large,
        marginBottom: 5
    },
    secondaryTextWrapper: {
        flexDirection: 'row',
        gap: 5
    },
    secondaryText: {
        color: COLORS.white,
        fontSize: SIZES.medium
    },
    drawerOptions: {
        flex: 1,
        backgroundColor: COLORS.lightGray,
        paddingTop: SIZES.small - 2,
    },
    secondaryImage: {
        width: SIZES.medium,
        height: SIZES.medium,
        tintColor: COLORS.white
    }
})

export default styles;