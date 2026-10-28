
export default function LoadingPage() {
  return (
    <div className="container mx-auto my-10 grid grid-cols-12 gap-4 animate-pulse">
      {/* Left Sidebar */}
      <aside className="col-span-3 space-y-4">
        <div className="h-8 w-3/4 rounded bg-gray-200" />

        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-5 w-full rounded bg-gray-200"
          />
        ))}
      </aside>

      {/* News Section */}
      <main className="col-span-6 space-y-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-gray-200 p-5 shadow-sm"
          >
            {/* Author */}
            <div className="mb-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200" />

              <div className="flex-1 space-y-2">
                <div className="h-4 w-1/3 rounded bg-gray-200" />
                <div className="h-3 w-1/4 rounded bg-gray-200" />
              </div>
            </div>

            {/* Title */}
            <div className="mb-3 h-6 w-full rounded bg-gray-200" />
            <div className="mb-5 h-6 w-4/5 rounded bg-gray-200" />

            {/* Image */}
            <div className="h-48 w-full rounded-lg bg-gray-200" />

            {/* Description */}
            <div className="mt-4 space-y-2">
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-5/6 rounded bg-gray-200" />
              <div className="h-4 w-2/3 rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </main>

      {/* Right Sidebar */}
      <aside className="col-span-3 space-y-4">
        <div className="h-8 w-3/4 rounded bg-gray-200" />
        <div className="h-32 rounded-lg bg-gray-200" />
        <div className="h-32 rounded-lg bg-gray-200" />
      </aside>
    </div>
  );
}
