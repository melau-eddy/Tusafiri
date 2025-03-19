import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Login, loginSchema } from '@/validation/loginValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import useLogin from './useLogin';

export default function LoginForm({ setDialogClosed }: { setDialogClosed: Dispatch<SetStateAction<boolean>> }) {
  const { onSubmit, isLoading } = useLogin({ setDialogClosed });
  const form = useForm<Login>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="phoneNumber"
          render={() => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" {...form.register('phoneNumber')} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={() => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...form.register('password')} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isLoading} type="submit">
          {isLoading ? 'verifying credentials ...' : 'Login'}
        </Button>
      </form>
    </Form>
  );
}
