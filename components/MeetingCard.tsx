import Link from "next/link";
import { deleteMeeting } from "@/lib/actions";
import { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({
  meeting,
}: MeetingCardProps) {
  const deleteMeetingWithId = deleteMeeting.bind(null, meeting.id);

  return (
    <article className="group rounded-2xl border border-[#d8cfc0] bg-[#fbf9f4] p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8a6842]">
            {meeting.meetingType} meeting
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-[#26343b]">
            {meeting.date}
          </h2>
        </div>

        <div className="rounded-full bg-[#e5ded0] px-3 py-1 text-xs font-medium text-[#6f512f]">
          #{meeting.id}
        </div>
      </div>

      <div className="space-y-2 border-t border-[#d8cfc0] pt-4 text-sm text-[#66737a]">
        <p>
          <span className="font-semibold text-[#26343b]">
            Presiding:
          </span>{" "}
          {meeting.presiding}
        </p>

        <p>
          <span className="font-semibold text-[#26343b]">
            Conducting:
          </span>{" "}
          {meeting.conducting}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/meetings/${meeting.id}`}
          className="inline-flex items-center rounded-full bg-[#8a6842] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6f512f]"
        >
          View meeting
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>

        <Link
          href={`/meetings/new/${meeting.id}/edit`}
          className="inline-flex items-center rounded-full border border-[#8a6842] px-5 py-2.5 text-sm font-semibold text-[#6f512f] transition hover:bg-[#e5ded0]"
        >
          Edit
        </Link>

        <form action={deleteMeetingWithId}>
          <button
            type="submit"
            className="inline-flex items-center rounded-full border border-red-300 px-5 py-2.5 text-sm font-semibold text-red-700 transition hover:bg-red-50"
          >
            Delete
          </button>
        </form>
      </div>
    </article>
  );
}