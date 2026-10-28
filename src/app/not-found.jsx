'use client'
import Link from "next/link";
import { Home, ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 px-6 text-white">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-500/10 ring-1 ring-indigo-500/30">
          <SearchX className="h-10 w-10 text-indigo-400" />
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
          Error 404
        </p>

        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
          Page not found
        </h1>

        <p className="mx-auto mb-8 max-w-md leading-7 text-gray-400">
          Sorry, we couldnt find the page youre looking for.
          It may have been moved, deleted, or the URL may be incorrect.
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium transition hover:bg-indigo-500"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-6 py-3 font-medium transition hover:bg-gray-800"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

      
      </div>
    </main>
  );
}
