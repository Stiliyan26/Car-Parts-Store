import { StyleSheet } from 'react-native';

import { COLORS, SIZES, FONT } from '../../../constants';

const styles = StyleSheet.create({
    createBtn: {
        paddingHorizontal: SIZES.medium,
        paddingVertical: SIZES.small,
        fontSize: SIZES.medium,
        borderRadius: SIZES.medium,
        overflow: 'hidden',
        justifyContent: 'center'
    },
    btnContent: {
        color: COLORS.white,
    }
});

export default styles;