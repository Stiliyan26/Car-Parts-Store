import styles from './CompaniesWrapper.style';

import HeaderForList from '../../../common/HeaderForList/HeaderForList';
import NoDataMsg from '../../../common/NoDataMsg/NoDataMsg';
import AppLoader from '../../../common/Loader/AppLoader';
import CompanyCardList from '../CompanyCardList/CompanyCardList';

import { useCompaniesContext } from '../../../../contexts/useCompaniesContext';
import { useSearchContext } from '../../../../contexts/useSearchContext';
import { filteredBySearchQuery } from '../../../../utils/helperFunctions';

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
    ? <CompanyCardList companies={companies} />
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
