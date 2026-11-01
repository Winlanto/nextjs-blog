"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-md py-16 text-center space-y-4">
      <h2 className="text-2xl font-bold text-zinc-950">
        Something went wrong!
      </h2>
      <p className="text-sm text-zinc-600">
        {error.message || "Failed to load data."}
      </p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center justify-center bg-zinc-900 text-white rounded-md px-4 py-2.5 transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
      >
        Try Again
      </button>
    </div>
  );
}
