import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";

function getMostRecentSunday(): string {
  const today = new Date();

  const day = today.getDay();

  today.setDate(today.getDate() - day);

  return today.toISOString().split("T")[0];
}

export default async function CurrentMeetingPage() {
  const currentSunday = getMostRecentSunday();

  const meetings = await getMeetings(currentSunday);

  if (meetings.length === 0) {
    redirect("/meetings");
  }

  redirect(`/meetings/${meetings[0].id}`);
}