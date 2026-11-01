import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/posts"
      className="rounded-md bg-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
    >
      ← Back
    </Link>
  );
}
