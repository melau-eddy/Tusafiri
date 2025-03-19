import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

type User = { userId: string; name: string; contact: string; role: 'admin' | 'customer' | null };

type AuthContext = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  resetUserState: () => void;
};

export const AuthContext = createContext<AuthContext | null>(null);

export default function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const resetUserState = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const values = { user, setUser, isLoggedIn, setIsLoggedIn, resetUserState };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
