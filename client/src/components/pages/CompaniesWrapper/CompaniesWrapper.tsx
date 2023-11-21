import styles from './CompaniesWrapper.style';

import CompanyCard from '../CompanyCard/CompanyCard';
import HeaderForList from '../../common/HeaderForList/HeaderForList';
import NoDataMsg from '../../common/NoDataMsg/NoDataMsg';
import AppLoader from '../../common/Loader/AppLoader';

import { useCompaniesContext } from '../../../contexts/useCompaniesContext';
import { useSearchContext } from '../../../contexts/useSearchContext';
import { filteredBySearchQuery } from '../../../utils/helperFunctions';

import {
  FlatList, View
} from 'react-native';
import { useMemo } from 'react';

const CompaniesWrapper = () => {
  const { searchQuery } = useSearchContext();

  const { companies } = useCompaniesContext();
  // const filteredCompanies = useMemo(() => {
  //     return filteredBySearchQuery(allCompanies, searchQuery)
  // }, [allCompanies, searchQuery]);

  const companyList = () => companies && companies.length > 0
    ? (
      <FlatList
        data={companies}
        renderItem={({ item }) => (
          <CompanyCard
            companyId={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            location={item.location}
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    )
    : <NoDataMsg />

  return (
    <View style={styles.marginContainer}>
      <HeaderForList
        headerTitle={'Companies'}
      />

      {companies === undefined
        ? <AppLoader />
        : companyList()
      }
    </View>
  )
}

export default CompaniesWrapper;
