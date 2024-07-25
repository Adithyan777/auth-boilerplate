import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { db } from "../drizzle/db.js";
import { sessionTable, userTable } from "../drizzle/schema.js";
import { Lucia } from "lucia";

const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);

export const lucia = new Lucia(adapter,{
    sessionCookie : {
        expires : false,
        attributes: {
            secure: false, // TODO - Set to true if using https
        }
    },
    getUserAttributes: (attributes) => {
		return {
			// attributes has the type of DatabaseUserAttributes
			username: attributes.username,
            firstName: attributes.firstName,
            lastName: attributes.lastName
		};
	}
});