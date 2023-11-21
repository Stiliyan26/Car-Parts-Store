import { SIZES } from '../../../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    icon: {
        height: SIZES.large,
        width: SIZES.large,
        margin: 3,
        resizeMode: 'contain',
    },
    touchable: {
        marginHorizontal: 11,
    },
});

export default styles;