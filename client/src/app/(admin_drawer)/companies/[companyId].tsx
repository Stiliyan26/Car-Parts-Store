import styles from '../../../styles/companyDetails.style';

import CompanyDetailsTitle from '../../../components/pages/CompanyDetailsTitle/CompanyDetailsTitle';
import SectionTabs from '../../../components/pages/SectionTabs/SectionTabs';
import SectionFooter from '../../../components/pages/Sections/SectionFooter/SectionFooter';

import { useNavigationSetup } from '../../../hooks/useNavigationSetup';
import { companyDetailsOptions } from '../../../utils/navigationOptions';
import { CompanySections, companySectionsMapper } from '../../../types/enums';
import { CompanyIdParams } from '../../../types/type/ParamTypes';
import { companyComponents } from '../../../utils/sectionsData';
import { SearchProvider } from '../../../contexts/useSearchContext';
import { useCurrentCompanyContext } from '../../../contexts/useCurrentCompanyContext';
import AppLoader from '../../../components/common/Loader/AppLoader';

import { useLocalSearchParams, router } from 'expo-router';
import {
	Keyboard,
	SafeAreaView,
	Pressable,
	View,
} from 'react-native';
import { useState } from 'react';

const companySections = [
	companySectionsMapper[CompanySections.EMPLOYEE_TAB],
	companySectionsMapper[CompanySections.PURCHASED_PARTS_TAB],
	companySectionsMapper[CompanySections.PARTS_FOR_SALE_TAB]
]

const CompanyDetails = () => {
	const { company, setCompanyId } = useCurrentCompanyContext();

	const [activeSectionTab, setActiveSectionTab]
		= useState<string>(companySectionsMapper[CompanySections.EMPLOYEE_TAB]);

	const params = useLocalSearchParams<CompanyIdParams>();

	useNavigationSetup(companyDetailsOptions(router, styles.navContainer, setCompanyId));

	return (
		<SearchProvider>
			<Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
				<SafeAreaView style={styles.container}>
					{company
						? (
							<View style={styles.detailsWrapper}>
								<CompanyDetailsTitle
									imageUrl={company.imageUrl}
									name={company.name}
									location={company.location}
									email={company.email}
								/>

								<View style={styles.sectionTabsWrapper}>
									<SectionTabs
										sectionTabs={companySections}
										activeSectionTab={activeSectionTab}
										setActiveSectionTab={setActiveSectionTab}
									/>
								</View>

								<View style={styles.sectionTabContentContainer}>
									{companyComponents[activeSectionTab]}
								</View>

								<SectionFooter />
							</View>
						)
						: <AppLoader />
					}
				</SafeAreaView>
			</Pressable>
		</SearchProvider>
	)
}

export default CompanyDetails;
