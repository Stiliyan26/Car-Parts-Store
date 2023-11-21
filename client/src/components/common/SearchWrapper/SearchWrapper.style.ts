import { COLORS, FONT, SIZES } from '../../../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    searchContainer: {
        height: 50,
        flexDirection: 'row',
        gap: SIZES.small,
    },
    searchBtn: {
        width: 50,
        height: '100%',
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.medium,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchImg: {
        width: '50%',
        height: '50%',
        tintColor: COLORS.white
    },
    selectedSearch: {
        borderColor: COLORS.selectedBorderColor,
    },
    defaultSearch: {
        borderColor: COLORS.defaultBorderColor,
    }
})

export default styles;