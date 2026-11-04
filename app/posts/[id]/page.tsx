import { notFound } from "next/navigation";
import { getPostById } from "@/utils/posts";

import BackButton from "@/components/BackButton";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";

type PostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;

  const post = await getPostById(Number(id));

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <BackButton />
        <div className="inline-flex gap-2">
          <EditButton postId={post.id} />
          <DeleteButton postId={post.id} />
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
          {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
        </h1>
        <p className="text-lg leading-8 text-zinc-700">{post.content}</p>
      </div>
    </article>
  );
}
