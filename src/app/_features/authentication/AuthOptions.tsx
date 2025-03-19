'use client';

import { LogOut } from 'lucide-react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import { ModeToggle } from '@/components/ui/modeToggle';
import { useContext, useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { AuthContext } from '@/context/AuthContext';

type User = { userId: string; name: string; contact: string; role: 'admin' | 'customer' | null };

export default function AuthOptions() {
  const [isLoggedin, setIsloggedin] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const authContext = useContext(AuthContext);
  const { toast } = useToast();

  useEffect(() => {
    const loadUserState = () => {
      const user = localStorage.getItem('user');
      const logedIn = localStorage.getItem('isLoggedIn');

      setIsloggedin(logedIn ? true : false);
      setCurrentUser(user ? JSON.parse(user) : null);
    };

    loadUserState();
  }, []);

  const handleLogout = () => {
    setIsloggedin(false);
    setCurrentUser(null);
    localStorage.clear();
    authContext?.resetUserState();
    toast({
      description: 'Account succesfully logged out',
    });
  };

  if (isLoggedin || authContext?.isLoggedIn)
    return (
      <div className="me-6 flex flex-row items-center gap-2">
        <span>{currentUser?.name || authContext?.user?.name}</span>
        <div title="log out" className=" me-5">
          <LogOut className="size-4 cursor-pointer" onClick={handleLogout} />
        </div>
        <ModeToggle />
      </div>
    );

  return (
    <>
      <LoginModal />
      <SignupModal />
      <ModeToggle />
    </>
  );
}
