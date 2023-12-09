import { SIZES, COLORS, SHADOWS } from '../../../../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: SIZES.xSmall,
	},
	button: {
		backgroundColor: COLORS.tertiary,
		padding: SIZES.xSmall,
		borderRadius: SIZES.small - 2,
		...SHADOWS.small,
	},
	buttonText: {
		color: COLORS.white,
		fontSize: SIZES.medium,
	},
	imageContainer: {
		marginBottom: SIZES.medium,
		...SHADOWS.medium,
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 100
	}
});

export default styles;