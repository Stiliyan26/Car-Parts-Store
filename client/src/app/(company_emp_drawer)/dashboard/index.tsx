import styles from '../../../styles/empDashboard.style';

import GreetingAndSearch from '../../../components/common/GreetingAndSearch/GreetingAndSearch';
import SectionTabs from '../../../components/pages/SectionTabs/SectionTabs';

import { useNavigationSetup } from '../../../hooks/useNavigationSetup';
import { empDashboardNavOptions } from '../../../utils/navigationOptions';
import { SearchProvider } from '../../../contexts/useSearchContext';
import { EmpDashboardSections, empDashboardSectionsMapper } from '../../../types/enums';
import { empDashboardComponents } from '../../../utils/sectionsData';
import { useAuthContext } from '../../../contexts/useAuthContext';

import { 
	Keyboard, 
	SafeAreaView, 
	View, 
	Pressable 
} from 'react-native';
import { useState } from 'react';

const sectionTabs = [
	empDashboardSectionsMapper[EmpDashboardSections.INVENTORY],
	empDashboardSectionsMapper[EmpDashboardSections.SALES],
	empDashboardSectionsMapper[EmpDashboardSections.REPORTS]
];

const Dashboard = () => {
	const { user } = useAuthContext();

	const [activeSectionTab, setActiveSectionTab]
		= useState<string>(sectionTabs[EmpDashboardSections.INVENTORY]);

	useNavigationSetup(
		empDashboardNavOptions(styles.navContainer, ''),
	);

	return (
		<SearchProvider>
			<Pressable onPress={Keyboard.dismiss} style={{flex: 1}}>
				<SafeAreaView style={styles.mainContainer}>
					<View style={styles.marginContainer}>
						<GreetingAndSearch
							message={user ? user.name : 'User'}
						/>

						<View style={styles.sectionTabsWrapper}>
							<SectionTabs
								sectionTabs={sectionTabs}
								activeSectionTab={activeSectionTab}
								setActiveSectionTab={setActiveSectionTab}
							/>
						</View>	

						<View style={styles.sectionTabContentContainer}>
							{empDashboardComponents[activeSectionTab]}
						</View>
					</View>
				</SafeAreaView>
			</Pressable>
		</SearchProvider>
	)
}

export default Dashboard;
