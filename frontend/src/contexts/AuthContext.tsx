// frontend/src/contexts/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { apiService, type User } from '../utils/api';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (fullName: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize auth state on app load
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (token) {
          const response = await apiService.getCurrentUser();
          setUser(response.data.user);
        }
      } catch (error) {
        // Token might be expired, clear it
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await apiService.login({ email, password });
      const { user: userData, accessToken, refreshToken } = response.data;
      
      // Store tokens
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      
      setUser(userData);
    } catch (error: any) {
      setError(error.message || 'Login failed');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (fullName: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await apiService.register({ fullName, email, password });
      // Registration successful, but user needs to login
      setError(null);
    } catch (error: any) {
      setError(error.message || 'Registration failed');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await apiService.logout();
    } catch (error) {
      console.error('Logout API call failed:', error);
    } finally {
      // Clear local state regardless of API call success
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setUser(null);
    }
  };

  const clearError = () => setError(null);

  const value = {
    user,
    login,
    register,
    logout,
    isLoading,
    error,
    clearError,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
