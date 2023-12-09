import { ChildrenProps } from '../types/interface/props-interface';
import { AuthData, TokenData } from '../types/interface/core-interface';
import { authStorageKey } from '../constants/GlabalConstants';
import useAuthAsyncStorage from '../hooks/localStorage/useAuthAsyncStorage';
import { deleteRefreshToken } from '../services/authService';
import { createContext, useContext } from 'react';

interface AuthContextType {
  user: AuthData,
  isAuthenticated: boolean,
  tokenData: TokenData,
  login: (authData: AuthData) => Promise<void>,
  logout: () => Promise<void>,
  getUser: () => Promise<AuthData>,
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
};

const AuthContext = createContext<AuthContextType>(defaultContextValue);

export const AuthProvider: React.FC<ChildrenProps> = ({ children }) => {
  const {
    user,
    setAuthStorage,
    getUserStorage,
  } = useAuthAsyncStorage(authStorageKey, initialValue);

  const login = async (authData: AuthData) => await setAuthStorage(authData);

  const logout = async () => {
    await deleteRefreshToken(user.tokenData.refreshToken);

    await setAuthStorage(initialValue);
  }

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