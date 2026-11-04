"use client";

import { upvotePost } from "@/actions/actions";

export default function UpvoteButton({
  postId,
  votes,
}: {
  postId: number;
  votes: number;
}) {

  return (
    <button
      type="button"
      className="rounded-md bg-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-900 transition-colors hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
      onClick={() => {
        upvotePost(postId);
      }}
    >
      Upvote {votes}
    </button>
  );
}
