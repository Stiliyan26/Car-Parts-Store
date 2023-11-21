import { COLORS, SIZES } from '../../../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header:  {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.medium
    },
    headerTitle: {
        fontSize: SIZES.large,
    },
    headerBtn: {
        color: COLORS.darkGray,
        fontSize: SIZES.medium,
    },
})

export default styles;