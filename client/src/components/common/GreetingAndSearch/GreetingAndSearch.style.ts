import { COLORS, SIZES } from '../../../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    greetingMessage: {
        fontSize: SIZES.large,
        marginBottom: SIZES.large,
        marginTop: SIZES.medium,
        color: COLORS.darkestGray
    },
    searchContainer: {
        marginBottom: SIZES.xLarge,
    }
})

export default styles;