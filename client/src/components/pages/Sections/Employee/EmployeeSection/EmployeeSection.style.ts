import { COLORS, FONT, SIZES } from '../../../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.5,
    borderRadius: SIZES.medium,
    borderColor: COLORS.gray,
    overflow: 'hidden',
    backgroundColor: COLORS.gray4,
  },
  sectionNameContainer: {
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: SIZES.small,
    alignItems: 'baseline'
  },
  sectionName: {
    fontSize: SIZES.large,
    textAlign: 'center',
    backgroundColor: COLORS.gray4,
    color: COLORS.darkestGray,
  }
});

export default styles;