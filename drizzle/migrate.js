import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Resolve the path to the .env file
dotenv.config({ path: resolve(__dirname, '../.env') });

async function main() {
    const migrationClient = postgres(process.env.DATABASE_URL, { max: 1 });

    // Construct the absolute path to the migrations folder
    const migrationsFolder = resolve(__dirname, 'migrations');

    await migrate(drizzle(migrationClient), {
        migrationsFolder: migrationsFolder,
    });

    await migrationClient.end();
}

main();
