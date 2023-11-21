import { COLORS, FONT, SIZES } from '../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tabContainer: {
        borderRadius: SIZES.small,
        backgroundColor: COLORS.gray4,
        paddingHorizontal: SIZES.large,
        paddingVertical: SIZES.medium
    },
    btnText: {
        fontSize: SIZES.medium,
    }
});

export default styles;