import React, { createContext, useState, useCallback, ReactNode } from 'react';

export type UserType = 'particulier' | 'entreprise';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName?: string;
  companyName?: string;
  type: UserType;
  phone?: string;
  avatar?: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string, type: UserType) => Promise<void>;
  signup: (userData: any) => Promise<void>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (email: string, password: string, type: UserType) => {
    setIsLoading(true);
    try {
      // TODO: Remplacer par appel API réel
      // const response = await apiCall('/api/auth/login', {
      //   method: 'POST',
      //   body: JSON.stringify({ email, password, type }),
      // });

      // Simulé pour le développement
      const mockUser: User = {
        id: '123',
        email,
        firstName: type === 'particulier' ? 'Ahmed' : 'Fatima',
        lastName: type === 'particulier' ? 'Benomar' : undefined,
        companyName: type === 'entreprise' ? 'Smart-Économie' : undefined,
        type,
        phone: '+22 535 257 390',
      };

      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('token', 'mock-token-' + Date.now());
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signup = useCallback(async (userData: any) => {
    setIsLoading(true);
    try {
      // TODO: Remplacer par appel API réel
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        companyName: userData.companyName,
        type: userData.type,
        phone: userData.phone,
      };

      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('token', 'mock-token-' + Date.now());
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }, []);

  const updateProfile = useCallback(async (userData: Partial<User>) => {
    setIsLoading(true);
    try {
      // TODO: Remplacer par appel API réel
      const updatedUser = { ...user, ...userData } as User;
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
