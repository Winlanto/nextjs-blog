import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import AuthButtons from "./AuthButtons";

export default async function Header() {
  return (
    <header className="grid grid-cols-3 h-14 items-center border-b border-zinc-300 px-4 sm:px-6">
      <Link href="/" className="justify-self-start">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={89}
          height={18}
          priority
        />
      </Link>
      <nav className="flex items-center gap-4 text-sm font-medium text-zinc-600 justify-self-center">
        <Link href="/" className="hover:text-zinc-950">
          Home
        </Link>
        <Link href="/posts" className="hover:text-zinc-950">
          Posts
        </Link>
      </nav>
      <div className="flex items-center gap-4 justify-self-end">
        <Suspense
          fallback={
            <div className="h-9 w-36 animate-pulse rounded bg-zinc-200" />
          }
        >
          <AuthButtons />
        </Suspense>
      </div>
    </header>
  );
}
