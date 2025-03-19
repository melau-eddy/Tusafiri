import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  userId: uuid('user_id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 256 }).notNull(),
  phoneNumber: varchar('phone', { length: 256 }).notNull().unique(),
  password: varchar('password', { length: 256 }).notNull(),
  role: varchar('role').$type<'admin' | 'customer'>().default('customer'),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
});
