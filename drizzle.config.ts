import { type Config } from 'drizzle-kit';
import process from 'node:process';
import 'dotenv/config';

export default {
	schema: './index.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
} satisfies Config;
