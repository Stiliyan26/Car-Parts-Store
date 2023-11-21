import AsyncStorage from '@react-native-async-storage/async-storage';
import { AdminData } from '../../types/interface/IData';

import { useEffect, useState } from 'react';

const useAdminStorage = (
    key: string,
    initialValue: AdminData
) => {
    const [admin, setAdmin] = useState<AdminData>(initialValue);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const item = await AsyncStorage.getItem(key);

                if (item) {
                    const parsedItem = JSON.parse(item);
                    setAdmin(parsedItem);
                }
            } catch (error) {
                console.error((error as Error).message);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        const setAsyncStorage = async () => {
            try {
                await AsyncStorage.setItem(key, JSON.stringify(admin));
            } catch (error) {
                console.error((error as Error).message);
            }
        }

        setAsyncStorage();
    }, [admin]);

    const setAdminStorage = (value: AdminData) => setAdmin(value);

    const isLoggedUserAdmin = (email: string) => admin.email === email

    return {
        admin,
        setAdmin: setAdminStorage,
        isLoggedUserAdmin
    };
}

export default useAdminStorage;
