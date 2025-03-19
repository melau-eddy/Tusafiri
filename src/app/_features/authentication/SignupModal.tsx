import { useState } from 'react';
import { User } from 'lucide-react';

import useScrollY from '@/lib/hooks/useScrollY';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import SignupForm from './SignupForm';

export default function SignupModal() {
  const [dialogClosed, setDialogClosed] = useState(false);
  const isScrolled = useScrollY();

  if (!dialogClosed)
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={'link'}
            className={`${isScrolled ? ' text-primary-foreground' : 'text-primary'} inline-flex items-center gap-1 text-xs`}
          >
            <User className="size-5" />
            <span className="font-semibold tracking-wide">Sign Up</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="w-full max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Sign up</DialogTitle>
            <DialogDescription>Enter your details to complete registration</DialogDescription>
          </DialogHeader>

          <SignupForm setDialogClosed={setDialogClosed} />
        </DialogContent>
      </Dialog>
    );
}
