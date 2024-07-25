import { validateRequest } from "@/lib/validate-requests";
import { logout } from "./signout_action";

export default async function Home() {

  const {user} = await validateRequest();
  console.log(user);

  return (
    <>
    <div className="m-4"> Hello, world </div>
    {user && 
    <div className="m-4"> 
    Welcome, {user.firstName} {user.lastName}
    <form action={logout}>
			<button>Sign out</button>
		</form>
    </div>}
    {!user && <div className="m-4"> Please sign in </div>}
    </>
  );
}
