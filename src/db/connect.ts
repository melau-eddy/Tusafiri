import { loadEnvConfig } from '@next/env'
import { sql } from '@vercel/postgres'
import { drizzle } from 'drizzle-orm/vercel-postgres'

const dev = process.env.VERCEL_ENV !== 'production'
loadEnvConfig('./', dev)

export const db = drizzle(sql)
