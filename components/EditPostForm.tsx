"use client";

import { useRouter } from "next/navigation";
import type { Post } from "@prisma/client";
import { updatePost } from "@/actions/actions";

export default function EditPostForm({ post }: { post: Post }) {
  const router = useRouter();

  async function submit(formData: FormData) {
    await updatePost(post.id, formData);
    router.refresh();
    router.push(`/posts/${post.id}`);
  }

  return (
    <form action={submit} className="space-y-4">
      <label className="block space-y-1">
        <span className="block text-sm font-medium text-zinc-700">Title</span>
        <input
          type="text"
          name="title"
          required
          defaultValue={post.title}
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
          defaultValue={post.content ?? ""}
          rows={6}
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-950 focus:border-zinc-500 focus:outline-none transition-colors focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
      >
        Update Post
      </button>
    </form>
  );
}
