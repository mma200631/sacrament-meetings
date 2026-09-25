'use client';

import Link from 'next/link';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-semibold text-[#26343B]">
        Something went wrong
      </h2>

      <p className="mt-3 text-[#66737A]">
        We couldn&apos;t load the meetings right now.
      </p>

      <div className="mt-6 flex gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-md bg-[#26343B] px-5 py-3 text-white"
        >
          Try Again
        </button>

        <Link
          href="/meetings"
          className="rounded-md border border-[#26343B] px-5 py-3 text-[#26343B]"
        >
          Back to Meetings
        </Link>
      </div>
    </div>
  );
}