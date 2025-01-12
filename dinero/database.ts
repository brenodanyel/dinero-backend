import { PrismaClient } from '@prisma/client';
import { SQLDatabase } from 'encore.dev/storage/sqldb';

const DB = new SQLDatabase('dinero', {
	migrations: {
		path: './prisma/migrations',
		source: 'prisma',
	},
});

// Setup prisma client with connection string
export const prisma = new PrismaClient({
	datasources: {
		db: {
			url: DB.connectionString,
		},
	},
});
