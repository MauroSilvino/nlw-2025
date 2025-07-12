import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { env } from './../../env.ts';
import { schema } from './schema/index.ts'

// Create a PostgreSQL connection using the environment variables
export const sql = postgres(env.DATABASE_URL, {
  max: 10, // Maximum number of connections in the pool
  idle_timeout: 30, // Idle timeout in seconds
});

export const db = drizzle(sql, {
  schema,
  casing: 'snake_case',
})