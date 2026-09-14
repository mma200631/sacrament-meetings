import MeetingCard from "@/components/MeetingCard";
import { getMeetings } from "@/lib/meetings-db";

export default function MeetingsPage() {
  const meetings = getMeetings();

  return (
    <section>
      <div className="mb-10 max-w-2xl">
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

      <div className="grid gap-6 md:grid-cols-2">
        {meetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            meeting={meeting}
          />
        ))}
      </div>
    </section>
  );
}