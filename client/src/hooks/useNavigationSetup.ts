import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

import { StackNavigationOptions } from '@react-navigation/stack';

export function useNavigationSetup(
    options: StackNavigationOptions,
    dependencies: any[] = []
) {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions(options);
    }, dependencies);
}