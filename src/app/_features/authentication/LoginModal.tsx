import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { LogIn } from 'lucide-react';
import LoginForm from './LoginForm';
import useScrollY from '@/lib/hooks/useScrollY';
import { useState } from 'react';

export default function LoginModal() {
  const [dialogClosed, setDialogClosed] = useState(false);
  const isScrolled = useScrollY();

  if (!dialogClosed)
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={'link'}
            className={`${
              isScrolled ? ' text-primary-foreground' : 'text-primary'
            } inline-flex items-center gap-1 text-xs`}
          >
            <LogIn className="size-5" />
            <span className="font-semibold tracking-wide">Log in</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="w-full max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Login</DialogTitle>
            <DialogDescription>Enter your phone number below to login to your account.</DialogDescription>
          </DialogHeader>

          <LoginForm setDialogClosed={setDialogClosed} />
        </DialogContent>
      </Dialog>
    );
}
