'use server';

import { db } from '@/db/connect';
import { users } from '@/db/schema/users';
import { consts } from '@/lib/consts';
import { Login } from '@/validation/loginValidation';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';

export default async function loginAction(credentials: Login) {
  const { password, phoneNumber } = credentials;

  try {
    if (!password || !phoneNumber) {
      return {
        status: consts.httpCodeSeverError,
        message: 'Phone number and password are required',
      };
    }

    const user = await db.select().from(users).where(eq(users.phoneNumber, phoneNumber)).execute();
    if (!user.length) {
      return {
        status: consts.httpCodeSeverError,
        message: 'User does not exist, proceed to signup',
      };
    }

    const validPassword = await bcrypt.compare(password, user[0].password);
    if (!validPassword) {
      return {
        status: consts.httpCodeAuthError,
        message: 'Authentication Failed, Invalid Password',
      };
    }

    return {
      status: consts.httpCodeSucceed,
      message: 'Login Succesfull!',
      user: { userId: user[0].userId, name: user[0].name, contact: user[0].phoneNumber, role: user[0].role },
    };
  } catch (error) {
    console.error('Error in signupAction:', error);
    throw new Error('Network error, please try again');
  }
}
