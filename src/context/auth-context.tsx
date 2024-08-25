'use client';

import { createContext, useContext, useState, ReactNode, FunctionComponent } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  userId: number | null;
  handleUserId: (id: number) => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  userId: null,
  handleUserId: () => {}
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setIdUser] = useState<number | null>(null);

  const login = () => setIsAuthenticated(true);

  const logout = () => setIsAuthenticated(false);

  const handleUserId = (id: number) => setIdUser(id);

  const value = {
    isAuthenticated,
    login,
    logout,
    userId,
    handleUserId,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
