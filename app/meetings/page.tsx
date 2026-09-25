
import MeetingCard from "@/components/MeetingCard";
import MeetingSearch from "@/components/MeetingSearch";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import {
  getMeetings,
  getMeetingsTotalPages,
} from "@/lib/meetings-db";

type MeetingsPageProps = {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
};

export default async function MeetingsPage({
  searchParams,
}: MeetingsPageProps) {
  const params = await searchParams;

  const query = params.query || "";
  const currentPage = Number(params.page) || 1;

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <section>
      <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6842]">
            Ward Programs
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-[#26343b]">
            Sacrament Meetings
          </h2>

          <p className="mt-4 leading-7 text-[#66737a]">
            View the programs, participants, hymns, announcements,
            and other details for our ward sacrament meetings.
          </p>
        </div>

        <Link
          href="/meetings/new"
          className="inline-flex items-center justify-center rounded-full bg-[#8a6842] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6f512f]"
        >
          + Create Meeting
        </Link>
      </div>

      <MeetingSearch />

      <div className="grid gap-6 md:grid-cols-2">
        {meetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            meeting={meeting}
          />
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        query={query}
      />
    </section>
  );
}

