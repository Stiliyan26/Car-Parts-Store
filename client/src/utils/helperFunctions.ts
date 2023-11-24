import { LOGIN_ROUTE } from '../constants/routerConstants';
import { Ionicons } from '@expo/vector-icons';

import { Router } from 'expo-router';
export const generateId = () => {
    return Math.random()
        .toString(36)
        .substring(2, 15) + Math.random()
            .toString(36)
            .substring(2, 15);
}


export function filteredBySearchQuery<T extends { name: string }>(
    data: T[],
    searchQuery: string
): T[] {
    if (!searchQuery) {
        return data;
    }

    return data
        .filter(item => item.name.trim().toLowerCase()
            .includes(searchQuery.trim().toLocaleLowerCase()));
}

interface OtherOptions {
    iconName: keyof typeof Ionicons.glyphMap,
    textContent: string,
    onClick: () => Promise<void>
  }
  
  export const otherOptions = (
    logout: () => Promise<void>,
    router: Router
  ): OtherOptions[] => [
      {
        iconName: 'settings',
        textContent: 'Settings',
        onClick: async () => { }
      },
      {
        iconName: 'exit-outline',
        textContent: 'Sign out',
        onClick: async () => {
          await logout();
          
          router.replace('/(auth)/login');
        }
      }
    ]
