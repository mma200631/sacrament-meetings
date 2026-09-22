export default async function EditMeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <section>
      <h1 className="text-3xl font-semibold text-[#26343B]">
        Edit Meeting
      </h1>

      <p className="mt-4 text-[#66737A]">
        Editing meeting {id} will be implemented in Week 04.
      </p>
    </section>
  );
}