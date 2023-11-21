import { FONT, SIZES } from '../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderRadius: 100,
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        marginTop: 30,
    },
    content: {
        fontSize: SIZES.xLarge,
    }
});

export default styles;
