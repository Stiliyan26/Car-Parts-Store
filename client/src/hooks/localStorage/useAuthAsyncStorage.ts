import { AuthData, TokenData } from '../../types/interface/IData';
import { addStorageListener, removeStorageListener } from '../../utils/storageEventLiseners';

import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuthAsyncStorage = (
  key: string,
  initialValue: AuthData
) => {
  const [user, setUser] = useState<AuthData>(initialValue);

  useEffect(() => {
    (async () => {
      try {
        const userDataFromStorage = await AsyncStorage.getItem(key);

        if (userDataFromStorage) {
          const parsedUser: AuthData = JSON.parse(userDataFromStorage);

          setUser(parsedUser);
        }
      } catch (error) {
        console.error((error as Error).message);
      }
    })();

    addStorageListener(setUser);

    return () => {
      removeStorageListener();
    }
  }, []);

  const getUserStorage = async () => {
    try {
      const userDataFromStorage = await AsyncStorage.getItem(key);

      return userDataFromStorage
        ? JSON.parse(userDataFromStorage)
        : initialValue
    } catch (error) {
      console.error((error as Error).message);
    }

    return initialValue;
  };

  const setAuthStorage = async (value: AuthData) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));

      setUser(value);
    } catch (error) {
      console.error((error as Error).message);
    }
  }

  const setNewTokensStorage = async (tokenData: TokenData) => {
    try {
      setUser(userData => ({ ...userData, tokenData }));
    } catch (error) {
      console.error((error as Error).message);
    }
  }

  return {
    user,
    getUserStorage,
    setAuthStorage,
    setNewTokensStorage
  };
}

export default useAuthAsyncStorage;