import { notFound } from "next/navigation";
import { getPostById } from "@/utils/posts";
import { updatePost } from "@/actions/actions";
import DeleteButton from "@/components/DeleteButton";
import BackButton from "@/components/BackButton";

type EditPostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id } = await params;

  const post = await getPostById(Number(id));

  if (!post) {
    notFound();
  }

  const updatePostWithId = updatePost.bind(null, post.id);

  return (
    <article className="space-y-6">
      <section className="space-y-4 border-zinc-200 pt-6">
        <div className="w-full flex items-center justify-between">
          <BackButton />
          <DeleteButton postId={post.id} />
        </div>
        <h2 className="text-xl font-semibold text-zinc-950">Edit Post</h2>
        <form action={updatePostWithId} className="space-y-4">
          <label className="block space-y-1">
            <span className="block text-sm font-medium text-zinc-700">
              Title
            </span>
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
      </section>
    </article>
  );
}
