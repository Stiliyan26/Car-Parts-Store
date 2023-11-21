import { StyleSheet } from 'react-native';

import { SIZES, COLORS, FONT } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray,
        height: '100%',
    },
    navContainer: {
        backgroundColor: COLORS.lightGray
    },
    formContainer: {
        marginTop: 50,
        marginHorizontal: SIZES.xxxLarge,
        display: 'flex',
    },
    titleWrapper: {
        padding: 5,
        flexDirection: 'row',
        gap: SIZES.large,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: COLORS.darkGray,
        fontSize: SIZES.xxxLarge,
        alignSelf: 'center',
        justifyContent: 'center',
    }
})

export default styles;