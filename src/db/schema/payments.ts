import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core'
import { bookings } from './bookings'
import { users } from './users'

export const payments = pgTable('payments', {
  paymentId: uuid('payment_id').primaryKey().defaultRandom(),
  bookingId: uuid('bookingId').references(() => bookings.bookingId),
  userId: uuid('user_id').references(() => users.userId),
  phoneNumber: varchar('payment_phone', { length: 256 }).notNull(),
})
