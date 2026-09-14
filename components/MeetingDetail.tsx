import { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({
  meeting,
}: MeetingDetailProps) {
  return (
    <article className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">
          Sacrament Meeting — {meeting.date}
        </h1>

        <p className="mt-2 capitalize text-gray-600">
          {meeting.meetingType} Meeting
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold">Leadership</h2>

        <p>
          <strong>Presiding:</strong> {meeting.presiding}
        </p>

        <p>
          <strong>Conducting:</strong> {meeting.conducting}
        </p>
      </section>

      {meeting.announcements && (
        <section>
          <h2 className="text-xl font-semibold">Announcements</h2>

          <ul className="list-disc pl-6">
            {meeting.announcements.map((announcement) => (
              <li key={announcement}>{announcement}</li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h2 className="text-xl font-semibold">Opening</h2>

        <p>
          <strong>Opening Hymn:</strong>{" "}
          {meeting.openingHymn.number} — {meeting.openingHymn.title}
        </p>

        <p>
          <strong>Opening Prayer:</strong> {meeting.openingPrayer}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Ward Business</h2>

        <ul className="list-disc pl-6">
          {meeting.wardBusiness.map((item, index) => (
            <li key={index}>{item.description}</li>
          ))}
        </ul>

        <p className="mt-2">
          <strong>Stake Business:</strong>{" "}
          {meeting.stakeBusiness ? "Yes" : "No"}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Sacrament</h2>

        <p>
          <strong>Hymn:</strong> {meeting.sacramentHymn.number} —{" "}
          {meeting.sacramentHymn.title}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Speakers & Musical Numbers</h2>

        <div className="space-y-3">
          {meeting.speakers.map((item, index) => (
            <div key={index} className="rounded border p-3">
              <p>
                <strong>{item.type === "speaker" ? "Speaker" : "Musical Number"}:</strong>{" "}
                {item.name}
              </p>

              <p>{item.topic}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Closing</h2>

        <p>
          <strong>Closing Hymn:</strong>{" "}
          {meeting.closingHymn.number} — {meeting.closingHymn.title}
        </p>

        <p>
          <strong>Closing Prayer:</strong> {meeting.closingPrayer}
        </p>
      </section>
    </article>
  );
}