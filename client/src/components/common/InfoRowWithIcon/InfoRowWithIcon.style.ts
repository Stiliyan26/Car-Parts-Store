import { COLORS, SIZES } from '../../../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    rowWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: SIZES.xSmall - 5,
        alignItems: 'center',
    },
    imageBox: {
        width: 20,
        height: 20,
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        tintColor: COLORS.darkGray
    },
    title: {
        fontSize: SIZES.medium,
        color: COLORS.darkGray
    }
});

export default styles;