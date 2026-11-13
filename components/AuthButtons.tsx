import {
  LogoutLink,
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function AuthButtons() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();
  const user = authenticated ? await getUser() : null;

  return authenticated ? (
    <>
      <span className="text-sm font-medium text-zinc-600">{user?.email}</span>
      <LogoutLink className="rounded bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">
        Sign out
      </LogoutLink>
    </>
  ) : (
    <>
      <LoginLink className="rounded bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">
        Sign in
      </LoginLink>
      <RegisterLink className="rounded border border-zinc-950 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-100">
        Sign up
      </RegisterLink>
    </>
  );
}
