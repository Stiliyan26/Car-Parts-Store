import { ChildrenProps } from '../types/interface/IProps';
import { AuthData, TokenData } from '../types/interface/IData';
import { authStorageKey } from '../constants/GlabalConstants';

import { createContext, useContext } from 'react';
import useAuthAsyncStorage from '../hooks/localStorage/useAuthAsyncStorage';

interface AuthContextType {
  user: AuthData,
  isAuthenticated: boolean,
  tokenData: TokenData,
  login: (authData: AuthData) => Promise<void>,
  logout: () => Promise<void>,
  getUser: () => Promise<AuthData>,
  setNewTokens: (tokenData: TokenData) => void
}
//storage setup

const initialValue: AuthData = {
  id: '',
  email: '',
  name: '',
  isAdmin: false,
  tokenData: {
    accessToken: '',
    refreshToken: '',
    exp: 0
  },
};

//context setup
const defaultContextValue: AuthContextType = {
  user: initialValue,
  isAuthenticated: false,
  tokenData: {
    accessToken: '',
    refreshToken: '',
    exp: 0
  },
  login: async () => { },
  logout: async () => { },
  getUser: async () => {
    return initialValue;
  },
  setNewTokens: () => { }
};

const AuthContext = createContext<AuthContextType>(defaultContextValue);

export const AuthProvider: React.FC<ChildrenProps> = ({ children }) => {
  const {
    user,
    setAuthStorage,
    getUserStorage,
    setNewTokensStorage
  } = useAuthAsyncStorage(authStorageKey, initialValue);

  const login = async (authData: AuthData) => await setAuthStorage(authData);

  const logout = async () => await setAuthStorage(initialValue);

  const setNewTokens = async (tokenData: TokenData) =>
    await setNewTokensStorage(tokenData);

  const getUser = async () => {
    return await getUserStorage();
  };

  const contextValue: AuthContextType = {
    user,
    isAuthenticated: !!user?.email,
    tokenData: user?.tokenData,
    login,
    logout,
    getUser,
    setNewTokens
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authState = useContext(AuthContext);

  if (!authState) {
    throw new Error('useAuthContext must be used within an AuthProvider!');
  }

  return authState;
};
