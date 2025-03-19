'use server';

import { db } from '@/db/connect';
import { users } from '@/db/schema/users';
import { consts } from '@/lib/consts';
import { Newuser } from '@/validation/signupValidation';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';

export default async function signupAction(newUser: Newuser) {
  try {
    const existingPhone = await db.select().from(users).where(eq(users.phoneNumber, newUser.phoneNumber)).execute();
    if (existingPhone.length > 0) {
      return {
        status: consts.httpCodeSeverError,
        message: 'Phone number already exists',
      };
    }

    const salt = await bcrypt.genSalt();
    const encryptedPassword = await bcrypt.hash(newUser.password, salt);

    const res = await db.insert(users).values({
      name: newUser.fullName,
      password: encryptedPassword,
      phoneNumber: newUser.phoneNumber,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (!res.rowCount) {
      return {
        status: consts.httpCodeSeverError,
        message: 'Failed to complete signup,try again',
      };
    }

    return {
      status: consts.httpCodeSucceed,
      message: 'Account succesfully created,proceed to login',
    };
  } catch (error) {
    console.error(`Error in signupAction: ${error}`);
    throw new Error('Network error, please try again');
  }
}
