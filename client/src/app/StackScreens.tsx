import { CompaniesProvider } from '../contexts/useCompaniesContext';

import { Stack } from 'expo-router';
import { CurrentCompanyProvider } from '../contexts/useCurrentCompanyContext';
import useUserData from '../hooks/useUserData';

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
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='(company_emp_drawer)'
          options={{
            headerShown: false
          }}
        />
      </Stack>
    )
  }

  return stackScreens();
}

export default StackScreens;
