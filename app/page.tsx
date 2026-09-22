import Image from "next/image";
import Link from "next/link";
import { getMeetings } from "@/lib/meetings-db";

export default async function Home() {
  const meetings = await getMeetings();
  const latestMeeting = meetings[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-[#26343B] px-8 py-12 text-[#F4F0E8] md:px-14 md:py-16">
        <div className="relative z-10 grid items-center gap-10 md:grid-cols-2">
          {/* Hero Text */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#D8B98A]">
              Lagos Ward
            </p>

            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Sacrament Meeting
              <span className="block text-[#D8B98A]">Planner</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#D6DADD] md:text-lg">
              Keep ward meetings organized with one simple place
              for programs, hymns, speakers, prayers, announcements,
              and meeting details.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/meetings"
                className="rounded-full bg-[#D8B98A] px-6 py-3 text-sm font-semibold text-[#26343B] transition hover:bg-[#E5CDA6]"
              >
                View Meetings
              </Link>

              <Link
                href="/meetings/current"
                className="rounded-full border border-[#89939A] px-6 py-3 text-sm font-semibold text-[#F4F0E8] transition hover:bg-[#3A4A52]"
              >
                Current Meeting
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative z-10">
            <Image
              src="/meeting-illustration.svg"
              alt="Sacrament meeting planner program illustration"
              width={800}
              height={500}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#D8B98A]/30" />
        <div className="absolute -bottom-32 right-16 h-80 w-80 rounded-full border border-[#D8B98A]/20" />
      </section>

      {/* Latest Meeting Section */}
      {latestMeeting && (
        <section className="mt-10 grid gap-6 md:grid-cols-[1.4fr_0.6fr]">
          <div className="rounded-3xl border border-[#D8CFC0] bg-[#FBF9F4] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A6842]">
              Latest Program
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#26343B]">
              {latestMeeting.date}
            </h2>

            <p className="mt-2 capitalize text-[#66737A]">
              {latestMeeting.meetingType} meeting
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#F1ECE2] p-4">
                <p className="text-xs uppercase tracking-wider text-[#8A6842]">
                  Presiding
                </p>

                <p className="mt-1 font-semibold text-[#26343B]">
                  {latestMeeting.presiding}
                </p>
              </div>

              <div className="rounded-2xl bg-[#F1ECE2] p-4">
                <p className="text-xs uppercase tracking-wider text-[#8A6842]">
                  Conducting
                </p>

                <p className="mt-1 font-semibold text-[#26343B]">
                  {latestMeeting.conducting}
                </p>
              </div>
            </div>

            <Link
              href={`/meetings/${latestMeeting.id}`}
              className="mt-7 inline-flex items-center font-semibold text-[#8A6842] hover:text-[#6F512F]"
            >
              View full program
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Meeting Count */}
          <div className="rounded-3xl bg-[#E5DED0] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A6842]">
              In the planner
            </p>

            <p className="mt-5 text-5xl font-semibold text-[#26343B]">
              {meetings.length}
            </p>

            <p className="mt-2 text-[#66737A]">
              meeting programs available
            </p>

            <div className="mt-8 h-px bg-[#C8BFAF]" />

            <Link
              href="/meetings"
              className="mt-6 inline-block text-sm font-semibold text-[#6F512F] hover:underline"
            >
              Browse all programs →
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}