import AppLoader from '../components/common/Loader/AppLoader';

import {
  COMPANIES_ROUTE,
  LOGIN_ROUTE,
  COMPANY_EMP_DASHBOARD
} from '../constants/routerConstants';

import { useEffect } from 'react';
import { Redirect, useNavigation } from 'expo-router';
import useUserData from '../hooks/useUserData';

const App = () => {
  const { isAdmin, isAuthenticated, isLoading } = useUserData();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerShadowVisible: false
    });
  }, []);

  if (isLoading) {
    return <AppLoader />
  }

  if (isAuthenticated) {
    if (isAdmin) {
      return <Redirect href={COMPANIES_ROUTE} />
    }

    return <Redirect href={COMPANY_EMP_DASHBOARD} />
  }

  return (
    <Redirect href={LOGIN_ROUTE} />
  )
}

export default App;
