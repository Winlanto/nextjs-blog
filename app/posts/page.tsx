import { Suspense } from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

async function PostList() {
  const posts = await prisma.post.findMany();

  return (
    <ul className="space-y-3">
      {posts.map((post) => (
        <li key={post.id}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={`/posts/${post.id}`}
              className="text-lg font-semibold text-zinc-950 hover:text-zinc-600"
            >
              {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function PostsPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
          Posts
        </h1>
        <Suspense
          fallback={
            <p className="text-center text-zinc-500">Loading posts...</p>
          }
        >
          <PostList />
        </Suspense>
      </section>
    </div>
  );
}
