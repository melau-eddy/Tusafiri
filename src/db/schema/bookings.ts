import { pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';
import { travelRoutes } from './travelRoute';
import { users } from './users';

export const bookings = pgTable('bookings', {
  bookingId: uuid('booking_id').primaryKey().defaultRandom(),
  routeId: uuid('route_id').references(() => travelRoutes.routeId),
  userId: uuid('user_id').references(() => users.userId),
  travellerName: varchar('traveller_name', { length: 256 }).notNull(),
  phoneNumber: varchar('traveller_phone', { length: 256 }).notNull(),
  seats: text('seats').array(),
});
