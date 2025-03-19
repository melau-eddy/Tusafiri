import { Dispatch, SetStateAction, useContext, useState } from 'react';
import loginAction from '@/actions/loginAction';
import { useToast } from '@/components/ui/use-toast';
import { consts } from '@/lib/consts';
import { Login } from '@/validation/loginValidation';
import { AuthContext } from '@/context/AuthContext';

export default function useLogin({ setDialogClosed }: { setDialogClosed: Dispatch<SetStateAction<boolean>> }) {
  const [isLoading, setIsLoading] = useState(false);
  const authContext = useContext(AuthContext);
  const { toast } = useToast();

  const onSubmit = async (data: Login) => {
    setIsLoading(true);
    try {
      const res = await loginAction(data);
      if (res.status !== consts.httpCodeSucceed) throw new Error(res.message);
      const user = res.user;

      authContext?.setUser(user!);
      authContext?.setIsLoggedIn(true);
      window.localStorage.setItem('user', JSON.stringify(user));
      window.localStorage.setItem('isLoggedIn', JSON.stringify(true));

      toast({
        description: res.message,
      });

      setDialogClosed(true);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          description: error.message,
          variant: 'destructive',
        });

        console.error(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { onSubmit, isLoading };
}
