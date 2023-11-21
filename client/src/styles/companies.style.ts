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
    greetingAndSearch: {
        marginHorizontal: SIZES.medium
    },
})

export default styles;