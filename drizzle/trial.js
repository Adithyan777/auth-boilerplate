import "dotenv/config";
import { db } from "./db.js";
import { userTable } from "./schema.js";

async function main() { 
    await db.insert(userTable).values({name: "Sreemayi",id: 10})
    const user = await db.query.userTable.findFirst();
    console.log(user);
}
main();
