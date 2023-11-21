import ScreenHeaderBtn from '../components/common/ScreenHeaderBtn/ScreenHeaderBtn';
import CustomDrawerToggleButton from '../components/drawer/CustomDrawerToggleButton/CustomDrawerToggleButton';

import icons from '../constants/icons';
import images from '../constants/images';
import companyImages from '../constants/companiesImages';

import { Router } from 'expo-router';
import type { StackNavigationOptions } from '@react-navigation/stack';
import { COMPANIES_ROUTE } from '../constants/routerConstants';

export const companiesNavOptions = (styles: {}): StackNavigationOptions => ({
  headerStyle: styles,
  headerShown: true,
  headerShadowVisible: false,
  headerTitle: '',
  headerLeft: () => <CustomDrawerToggleButton />,
  headerRight: () => (
    <ScreenHeaderBtn image={images.planeLogo} dimension={'80%'} />
  ),
});

export const companyDetailsOptions = (
  router: Router,
  styles: {},
  setCompanyId: (companyId: string) => void
): StackNavigationOptions => ({
  headerStyle: styles,
  headerTitle: '',
  headerShown: true,
  headerShadowVisible: false,
  headerLeft: () => (
    <ScreenHeaderBtn
      image={icons.goBack}
      dimension={'70%'}
      handlePress={() => {
        setCompanyId('');
        router.push(COMPANIES_ROUTE)
      }}
    />
  ),
  gestureEnabled: false,
});

//FORM
export const loginNavOptions = (styles: {}): StackNavigationOptions => ({
  headerStyle: styles,
  headerShown: true,
  headerShadowVisible: false,
  headerTitle: '',
});

export const createCompaniesNavOptions =
  (styles: {}): StackNavigationOptions => ({
    headerStyle: styles,
    headerShown: true,
    headerShadowVisible: false,
    headerTitle: '',
    headerLeft: () => <CustomDrawerToggleButton />,
  });

export const createEmployeeNavOptions = (
  styles: {},
  router: Router
): StackNavigationOptions => ({
  headerStyle: styles,
  headerShown: true,
  headerShadowVisible: false,
  headerTitle: '',
  gestureEnabled: false,
  headerLeft: () => (
    <ScreenHeaderBtn
      image={icons.goBack}
      dimension={'70%'}
      handlePress={() => router.back()}
    />
  ),
});

export const createPartNavOptions = (styles: {}): StackNavigationOptions => ({
  headerStyle: styles,
  headerShown: true,
  headerShadowVisible: false,
  headerTitle: '',
  headerLeft: () => <CustomDrawerToggleButton />,
});

//Company Employees
export const empDashboardNavOptions = (
  styles: {},
  companyImage: string | undefined
): StackNavigationOptions => ({
  headerStyle: styles,
  headerShown: true,
  headerShadowVisible: false,
  headerTitle: '',
  headerLeft: () => <CustomDrawerToggleButton />,
  headerRight: () => {
    if (companyImage) {
      return (
        <ScreenHeaderBtn
          image={companyImages[companyImage]}
          dimension={'100%'}
        />
      );
    }

    return null;
  },
});
