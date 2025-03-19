import { migrate } from 'drizzle-orm/vercel-postgres/migrator';
import { sql } from '@vercel/postgres';
import { db } from './connect';

async function main() {
  try {
    await migrate(db, { migrationsFolder: './src/db/migrations' });

    await sql.end();
    console.log('Migration succesfull');
  } catch (error) {
    console.log('Error connecting to db:', error);
  }
}

main();
