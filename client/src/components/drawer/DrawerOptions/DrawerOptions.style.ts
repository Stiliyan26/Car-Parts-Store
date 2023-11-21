import { FONT, SIZES } from '../../../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    otherContainer: {
        padding: SIZES.large,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        alignItems: 'flex-start'
    },
    otherTouchableContainer: {
        paddingVertical: SIZES.small - 2,
    },
    rowWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    otherText: {
        marginLeft: 5,
        fontSize: 15,
    }
});

export default styles;