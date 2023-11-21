import { Dispatch } from 'react';
import { AuthData } from '../types/interface/IData';
import { authStorageKey, tokenListenerKey } from '../constants/GlabalConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { EventRegister } from 'react-native-event-listeners';

let storageEventListener: (() => Promise<void>) | null = null;

export const addStorageListener = (setUser: Dispatch<React.SetStateAction<AuthData>>) => {
  const lisener = async () => {
    const item = await AsyncStorage.getItem(authStorageKey);

    if (item) {
      const authData: AuthData = JSON.parse(item);
      const tokenData = authData.tokenData;

      setUser(prev => ({
        ...prev,
        tokenData
      }));
    }
  }

  EventRegister.addEventListener(tokenListenerKey, lisener);

  storageEventListener = lisener;
}

export const removeStorageListener = () => {
  if (storageEventListener) {
    EventRegister.removeEventListener(tokenListenerKey);
  }
}

export const triggerStorageListener = () => {
  if (storageEventListener) {
    EventRegister.emitEvent(tokenListenerKey);
  }
}