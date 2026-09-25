import { notFound } from 'next/navigation';

import { getMeetingById } from '@/lib/meetings-db';
import EditMeetingForm from './EditMeetingForm';

export default async function EditMeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    notFound();
  }

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  return (
    <section className="max-w-3xl">
      <h1 className="text-3xl font-semibold text-[#26343B]">
        Edit Meeting
      </h1>

      <p className="mt-2 text-[#66737A]">
        Update the details for this sacrament meeting.
      </p>

      <EditMeetingForm meeting={meeting} />
    </section>
  );
}