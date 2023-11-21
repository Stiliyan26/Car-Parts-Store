import { StyleSheet } from 'react-native';

import { SIZES } from '../../../../constants';

const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative',
        marginVertical: SIZES.xSmall,
        borderRadius: SIZES.small,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        zIndex: 2,
        width: 20,
        height: 20,
        marginLeft: 10,
    },
});

export default styles;