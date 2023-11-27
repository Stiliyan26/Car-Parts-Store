import { COLORS, SIZES } from '../../../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: 'row',
    paddingVertical: SIZES.small - 5,
    alignItems: 'center',
  },
  infoText: {
    fontSize: SIZES.small + 2,
    color: COLORS.gray3,
    textAlign: 'center',
  }
});

export default styles;