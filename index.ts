import { bigint, pgTable, primaryKey, timestamp } from "drizzle-orm/pg-core";

export const testTable = pgTable(
    'test_table',
    {
        idOne: bigint('user_id', { mode: 'bigint' }),
        idTwo: bigint('guild_id', { mode: 'bigint' }),
        last_used: timestamp('last_used'),
    },
    (table) => {
        return {
            pk: primaryKey({ columns: [table.idOne, table.idTwo] }),
        };
    },
);
