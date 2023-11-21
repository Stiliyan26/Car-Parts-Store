import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
    },
    inputContainer: {
        marginVertical: 30
    },
    label: {
        color: COLORS.darkGray,
        fontSize: SIZES.medium,
    },
    forgotPassword: {
        marginTop: SIZES.medium,
        color: COLORS.primary,
        textDecorationLine: 'underline'
    }
})

export default styles;