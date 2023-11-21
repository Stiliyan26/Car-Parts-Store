import { COLORS, SIZES } from '../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    navContainer: {
        backgroundColor: COLORS.lightGray
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray
    },
    detailsWrapper: {
        flex: 1,
        marginHorizontal: SIZES.small,
    },
    sectionTabsWrapper: {
        padding: SIZES.large,
        alignItems: 'center'
    },
    sectionTabContentContainer: {
        flex: 1,
        marginHorizontal: SIZES.large,
        marginBottom: SIZES.xxxLarge + SIZES.xxLarge
    }
});

export default styles;