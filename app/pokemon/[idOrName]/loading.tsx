export default function Loading() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-5 w-32 rounded bg-gray-200" />
      <div className="flex items-center gap-4">
        <div className="h-40 w-40 rounded bg-gray-200" />
        <div className="space-y-2">
          <div className="h-6 w-48 rounded bg-gray-200" />
          <div className="h-4 w-64 rounded bg-gray-200" />
        </div>
      </div>
      <div className="h-40 w-full rounded bg-gray-200" />
    </div>
  );
}
