import { z } from 'zod';

// Define environment variables schema
export const envSchema = z.object({
  PORT: z.coerce.number().default(3334), // Default port if not set
  DATABASE_URL: z.string().url().startsWith('postgres://').default('postgres://docker:docker@localhost:5433/agents'), // Default database URL
});

// Parse and validate environment variables
export const env = envSchema.parse(process.env);