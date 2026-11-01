import { Suspense } from "react";
import Link from "next/link";
import { getPosts } from "@/utils/posts";
import { createPost } from "@/actions/actions";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";

async function PostList() {
  const posts = await getPosts();
  return (
    <ul className="space-y-3">
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href={`/posts/${post.id}`}
                className="text-lg font-semibold text-zinc-950 hover:text-zinc-600"
              >
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
              </Link>
              <div className="inline-flex gap-2">
                <EditButton postId={post.id} />
                <DeleteButton postId={post.id} />
              </div>
            </div>
          </li>
        );
      })}
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

      <section className="space-y-4 border-t border-zinc-200 pt-6">
        <h2 className="text-xl font-semibold text-zinc-950">New Post</h2>
        <form action={createPost} className="space-y-4">
          <label className="block space-y-1">
            <span className="block text-sm font-medium text-zinc-700">
              Title
            </span>
            <input
              type="text"
              name="title"
              required
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-950 focus:border-zinc-500 transition-color focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
            />
          </label>
          <label className="block space-y-1">
            <span className="block text-sm font-medium text-zinc-700">
              Content
            </span>
            <textarea
              name="content"
              required
              rows={6}
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-950 focus:border-zinc-500 focus:outline-none transition-colors focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
          >
            Create Post
          </button>
        </form>
      </section>
    </div>
  );
}
