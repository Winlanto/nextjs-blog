import { deletePost } from "@/actions/actions";

export default function DeleteButton({ postId }: { postId: number }) {
  const deletePostWithId = deletePost.bind(null, postId);

  return (
    <form action={deletePostWithId}>
      <button
        type="submit"
        className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
      >
        Delete
      </button>
    </form>
  );
}
