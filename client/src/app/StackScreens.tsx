import { CompaniesProvider } from '../contexts/useCompaniesContext';

import { Stack } from 'expo-router';
import { CurrentCompanyProvider } from '../contexts/useCurrentCompanyContext';
import useUserData from '../hooks/useUserData';
import { CompanyProvider } from '../contexts/useCompanyContext';

const StackScreens = () => {
  const { isAuthenticated, isAdmin } = useUserData();
  
  const stackScreens = () => {
    if (!isAuthenticated) {
      return (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name='(auth)'
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
        </Stack>
      )
    }

    if (isAdmin) {
      return (
        <CompaniesProvider>
          <CurrentCompanyProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name='(admin_drawer)'
                options={{
                  headerShown: false,
                }}
              />
            </Stack>
          </CurrentCompanyProvider>
        </CompaniesProvider>
      )
    }
    
    return (
      <CompanyProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name='(company_emp_drawer)'
            options={{
              headerShown: false
            }}
          />
        </Stack>
      </CompanyProvider>
    )
  }

  return stackScreens();
}

export default StackScreens;
