import { StyleSheet } from 'react-native';

import { SIZES } from '../../../../constants';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: SIZES.small,
        left: 0,
        right: 0,
        marginHorizontal: SIZES.large,
    }
});

export default styles;