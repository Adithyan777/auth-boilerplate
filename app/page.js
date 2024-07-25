import { validateRequest } from "@/lib/validate-requests";
import { logout } from "./signout_action";
import Link from "next/link";

export default async function Home() {

  const {user} = await validateRequest();

  return (
    <>
    <div className="m-4"> Hello, world </div>
    {user && 
    <div className="m-4"> 
    Welcome, {user.firstName} {user.lastName}
    <form action={logout}>
			<button className="underline">Sign out</button>
		</form>
    </div>}
    {!user && 
    <>
    <div className="m-4">
       Please sign in 
    </div>
       <Link href="/login" className="underline m-4">Login</Link>
    </>}
    </>
  );
}
