import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema.js';

dotenv.config({ path: "../.env" });

const queryClient = postgres(process.env.DATABASE_URL);
export const db = drizzle(queryClient, {schema, logger:true});
