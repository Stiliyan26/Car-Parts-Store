import { hideAsync } from 'expo-splash-screen';
import { COLORS, SIZES } from '../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    navContainer: {
        backgroundColor: COLORS.lightGray
    },
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.lightGray,
    },
    marginContainer: {
        flex: 1,
        marginHorizontal: SIZES.medium
    },
    sectionTabsWrapper: {
        alignItems: 'center',
        marginBottom: SIZES.medium
    },
    sectionTabContentContainer: {
        flex: 1,
        marginBottom: SIZES.medium,
    }
})

export default styles;