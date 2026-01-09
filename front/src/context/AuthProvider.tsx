import { useState, useEffect, type ReactNode } from 'react';
import {
  loginUser,
  registerUser,
  fetchCurrentUser,
  type LoginPayload,
  type RegisterPayload,
  type AuthUser,
} from '../api/auth';
import { clearToken, getToken, setToken } from '../utils/token';
import { AuthContext, type AuthContextValue } from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const isAuthenticated = !!user;

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const token = getToken();
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const currentUser = await fetchCurrentUser(token);
        setUser(currentUser);
      } catch (error) {
        console.error('Auth init error:', error);
        clearToken();
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    void initAuth();
  }, []);

  async function login(payload: LoginPayload): Promise<void> {
    setLoading(true);
    try {
      const { access_token } = await loginUser(payload);
      setToken(access_token);

      const currentUser = await fetchCurrentUser(access_token);
      setUser(currentUser);
    } catch (error) {
      clearToken();
      setUser(null);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function register(payload: RegisterPayload): Promise<void> {
    setLoading(true);
    try {
      await registerUser(payload);
    } finally {
      setLoading(false);
    }
  }

  function logout(): void {
    clearToken();
    setUser(null);
  }

  const value: AuthContextValue = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
  };

  const Provider = AuthContext.Provider;
  return <Provider value={value}>{children}</Provider>;
}
