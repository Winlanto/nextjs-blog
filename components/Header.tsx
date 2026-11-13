import Link from "next/link";
import Image from "next/image";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-zinc-300 px-4 sm:px-6">
      <Link href="/" className="">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={89}
          height={18}
          priority
        />
      </Link>
      <nav className="flex items-center gap-4 text-sm font-medium text-zinc-600">
        <Link href="/" className="hover:text-zinc-950">
          Home
        </Link>
        <Link href="/posts" className="hover:text-zinc-950">
          Posts
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <LoginLink className="rounded bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">
          Sign in
        </LoginLink>
        <RegisterLink className="rounded border border-zinc-950 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-100">
          Sign up
        </RegisterLink>
        <LogoutLink className="rounded bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">
          Sign out
        </LogoutLink>
      </div>
    </header>
  );
}
