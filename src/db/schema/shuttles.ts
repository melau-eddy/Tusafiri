import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const shuttles = pgTable('shuttles', {
  shuttleId: uuid('shuttle_id').primaryKey().defaultRandom(),
  busOperatos: varchar('shuttle_operator', { length: 256 }).notNull(),
  shuttleType: varchar('bus_type').$type<'executive' | 'vip' | 'business' | 'normal'>().default('normal'),
  facilities: varchar('facilities').$type<'water' | 'catering' | 'none'>().default('none'),
  numberPlate: varchar('number_plate', { length: 256 }).notNull(),
});
