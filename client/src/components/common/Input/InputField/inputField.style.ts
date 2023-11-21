import { SIZES, FONT, COLORS } from '../../../../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        flexGrow: 1,
        backgroundColor: COLORS.lightestWhite,
        padding: 10,
        borderRadius: SIZES.small,
        fontSize: SIZES.large,
        fontFamily: FONT.ChelaOneRegular,
        borderWidth: SIZES.xSmall - 8
    }
});

export default styles;