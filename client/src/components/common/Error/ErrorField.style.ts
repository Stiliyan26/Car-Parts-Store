import { StyleSheet } from 'react-native';

import { SIZES, COLORS, FONT } from '../../../constants';

const styles = StyleSheet.create({
    errorContainer: {
        color: COLORS.errorColor,
        fontSize: SIZES.medium,
        marginLeft: SIZES.small,
        marginBottom: SIZES.small
    }
})

export default styles;