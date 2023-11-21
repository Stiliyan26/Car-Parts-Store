import StackScreens from './StackScreens';

import { AuthProvider } from '../contexts/useAuthContext';
import { CompanyProvider } from '../contexts/useCompanyContext';

import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

import { useEffect } from 'react';

export const unstable_settings = {
	initialRouteName: 'index',
};

export default function RootLayoutNav() {
	const [fontsLoaded] = useFonts({
		ChelaOneRegular: require('../../assets/fonts/ChelaOne-Regular.ttf'),
		KanitRegular: require('../../assets/fonts/Kanit-Regular.ttf'),
		KanitBold: require('../../assets/fonts/Kanit-Bold.ttf'),
	})

	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		}

		prepare();
	}, []);

	if (!fontsLoaded) {
		return undefined;
	} else {
		SplashScreen.hideAsync();
	}

	return (
		<AuthProvider>
			<CompanyProvider>
				<StackScreens />
			</CompanyProvider>
		</AuthProvider>
	);
}
