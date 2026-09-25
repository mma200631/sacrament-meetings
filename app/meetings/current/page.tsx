import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";

function getCurrentSunday(): string {
  const today = new Date();
  const day = today.getDay();

  const daysUntilSunday = day === 0 ? 0 : 7 - day;

  today.setDate(today.getDate() + daysUntilSunday);

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${date}`;
}

export default async function CurrentMeetingPage() {
  const currentSunday = getCurrentSunday();

  const meetings = await getMeetings(currentSunday);

  if (meetings.length === 0) {
    redirect("/meetings");
  }

  redirect(`/meetings/${meetings[0].id}`);
}