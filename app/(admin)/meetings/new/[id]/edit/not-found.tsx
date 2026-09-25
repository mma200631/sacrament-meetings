import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[400px] flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-semibold text-[#26343B]">
        Meeting not found
      </h2>

      <p className="mt-3 text-[#66737A]">
        The meeting you are looking for does not exist.
      </p>

      <Link
        href="/meetings"
        className="mt-6 inline-flex rounded-full border-2 border-[#8a6842] bg-[#8a6842] px-6 py-3 font-semibold text-white transition hover:bg-[#6f512f]"
      >
        Back to Meetings
      </Link>
    </section>
  );
}