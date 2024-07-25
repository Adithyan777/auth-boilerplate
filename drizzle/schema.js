import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
	id: text("id").primaryKey(),
	firstName: text("first_name").notNull(),
	lastName: text("last_name").notNull(),
    username: text("username").notNull().unique(),
    password_hash : text("password_hash").notNull(),
});

export const sessionTable = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});