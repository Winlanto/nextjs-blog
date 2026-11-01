export default function Loading() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center space-y-6">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-zinc-900 border-r-transparent align-[-0.125em]" />
      <p className="text-sm font-medium text-zinc-600">Loading posts...</p>
    </div>
  );
}
