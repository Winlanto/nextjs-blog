import Link from "next/link";

export default function NotFound() {
  return (
    <article className="mx-auto text-center px-4 py-25 space-y-6">
      <div className="space-y-4">
        <p className="text-sm font-semibold tracking-wider text-zinc-600 uppercase">
          error 404
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 uppercase sm:text-4xl">
          Post not found
        </h1>
        <p className="text-base text-zinc-600">
          The post you are looking for doesn’t exist or has been moved.
        </p>
      </div>
      <Link
        href="/posts"
        className="inline-flex items-center justify-center bg-zinc-900 text-white rounded-md px-4 py-2.5 transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
      >
        ← Back to posts
      </Link>
    </article>
  );
}
