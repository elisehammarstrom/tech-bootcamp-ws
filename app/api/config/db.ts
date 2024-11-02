import { Kysely } from 'kysely';
import { PostgresJSDialect } from "kysely-postgres-js";
import postgres from "postgres";
import { Database } from "@/app/types/Database";

export const db = new Kysely<Database>({
    dialect: new PostgresJSDialect({
        postgres: postgres({
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: 5434,
            max: 10,
        }),
    }),
})
