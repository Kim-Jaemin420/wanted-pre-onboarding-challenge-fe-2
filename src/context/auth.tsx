import { createContext, ReactNode, useState } from 'react';
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '@/utils';
import { ACCESS_TOKEN } from '@/consts';

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
}

interface Props {
  children: ReactNode;
}

const AuthContext = createContext<AuthState>({
  token: null,
  setToken: (token: string) => {},
  removeToken: () => {},
});

const AuthProvider = ({ children }: Props) => {
  const token = getLocalStorage(ACCESS_TOKEN);
  const [tokenState, setTokenState] = useState<string | null>(token);

  const setToken = (token: string) => {
    setLocalStorage(ACCESS_TOKEN, token);
    setTokenState(token);
  };

  const removeToken = () => {
    removeLocalStorage(ACCESS_TOKEN);
    setTokenState(null);
  };

  return (
    <AuthContext.Provider value={{ token: tokenState, setToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
