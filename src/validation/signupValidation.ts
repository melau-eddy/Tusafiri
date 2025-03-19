import { z } from 'zod';

export const signupSchema = z.object({
  fullName: z.string().min(2, { message: 'Full Name is invalid' }),
  phoneNumber: z.string().min(10, { message: 'Phone number should be atleast 10 characters' }),
  password: z.string().min(6, { message: 'Password must be atleast 6 characters' }),
});

export type Newuser = z.infer<typeof signupSchema>;
