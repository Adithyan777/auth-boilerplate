import { validateRequest } from "@/lib/validate-requests";
import { lucia } from "@/lib/auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const logout = async () => {
	"use server";
	const { session } = await validateRequest();
	if (!session) {
		return {
			error: "Unauthorized"
		};
	}

	await lucia.invalidateSession(session.id); // comment this if you want to keep the session details in the db.

	const sessionCookie = lucia.createBlankSessionCookie();
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	return redirect("/login");
}