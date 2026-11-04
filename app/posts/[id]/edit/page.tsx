import { notFound } from "next/navigation";
import { getPostById } from "@/utils/posts";
import DeleteButton from "@/components/DeleteButton";
import BackButton from "@/components/BackButton";
import EditPostForm from "@/components/EditPostForm";
import { Suspense } from "react";

type EditPostPageProps = {
  params: Promise<{ id: string }>;
};

async function PostEditContent({ params }: EditPostPageProps) {
  const { id } = await params;
  const post = await getPostById(Number(id));

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-6">
      <section className="space-y-4 border-zinc-200 pt-6">
        <div className="w-full flex items-center justify-between">
          <BackButton />
          <DeleteButton postId={post.id} />
        </div>
        <h2 className="text-xl font-semibold text-zinc-950">Edit Post</h2>
        <EditPostForm post={post} />
      </section>
    </article>
  );
}

export default function EditPostPage({ params }: EditPostPageProps) {
  return (
    <article className="space-y-6">
      <section className="space-y-4 border-zinc-200 pt-6">
        <Suspense
          fallback={
            <p className="text-center text-zinc-500">Loading post...</p>
          }
        >
          <PostEditContent params={params} />
        </Suspense>
      </section>
    </article>
  );
}
