'use client';
import { createContext, useContext, useState } from 'react';

interface AuthContextType {
  userId: string | null;
  signIn: (id: string) => void;
  signOut: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null);

  const signIn = (id: string) => {
    setUserId(id);
  };
  const signOut = (id: string) => {
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ userId, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
