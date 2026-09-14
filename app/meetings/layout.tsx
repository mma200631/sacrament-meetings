import Link from "next/link";

export default function MeetingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="mb-8 border-b pb-4">
        <h1 className="text-2xl font-bold">Sacrament Meetings</h1>

        <nav className="mt-3 flex gap-4">
          <Link href="/meetings" className="hover:underline">
            All Meetings
          </Link>

          <Link href="/meetings/current" className="hover:underline">
            Current Meeting
          </Link>
        </nav>
      </div>

      {children}
    </div>
  );
}