import { date, decimal, integer, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { shuttles } from './shuttles';

export const travelRoutes = pgTable('travel_routes', {
  routeId: uuid('route_id').primaryKey().defaultRandom(),
  shuttleId: uuid('shuttle_id').references(() => shuttles.shuttleId),
  departure: varchar('departure', { length: 256 }).notNull(),
  destination: varchar('destination', { length: 256 }).notNull(),
  travelDate: date('travel_date', { mode: 'string' }),
  availableSeats: integer('available_seats').default(44),
  ticketPrice: decimal('ticket_price', { precision: 8, scale: 2 }),
});
