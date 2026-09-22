export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-8 rounded-2xl bg-[#26343B] p-6 text-[#F4F0E8]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B98A]">
          Admin
        </p>

        <h1 className="mt-2 text-2xl font-semibold">
          Meeting Management
        </h1>
      </div>

      {children}
    </div>
  );
}