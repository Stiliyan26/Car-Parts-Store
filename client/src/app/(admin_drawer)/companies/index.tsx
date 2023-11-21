import styles from '../../../styles/companies.style';

import GreetingAndSearch from '../../../components/common/GreetingAndSearch/GreetingAndSearch';
import CompaniesWrapper from '../../../components/pages/CompaniesWrapper/CompaniesWrapper';
import AppLoader from '../../../components/common/Loader/AppLoader';

import { useAuthContext } from '../../../contexts/useAuthContext';
import { useNavigationSetup } from '../../../hooks/useNavigationSetup';
import { companiesNavOptions } from '../../../utils/navigationOptions';
import { SearchProvider } from '../../../contexts/useSearchContext';

import {
  SafeAreaView,
  View
} from 'react-native';
import { useEffect, useState } from 'react';

const Companies = () => {
  const { getUser } = useAuthContext();
  const [username, setUsername] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetch = async () => {
      const user = await getUser();

      setUsername(user.name);
    }

    fetch();
  }, []);

  useNavigationSetup(companiesNavOptions(styles.navContainer));

  return (
    <SearchProvider>
      {username
        ? (
          <SafeAreaView style={styles.mainContainer}>
            <View style={styles.greetingAndSearch}>
              <GreetingAndSearch
                message={username}
              />
            </View>

            <CompaniesWrapper />
          </SafeAreaView>
        )
        : <AppLoader />
      }
    </SearchProvider>
  )
}

export default Companies;