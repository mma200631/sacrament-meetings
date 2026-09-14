import NavLinks from "./NavLinks";

export default function Header() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="border-b border-[#d8cfc0] bg-[#e5ded0]">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6842]">
              Lagos Ward
            </p>

            <h1 className="text-2xl font-semibold text-[#26343b] md:text-3xl">
              Sacrament Meeting
            </h1>

            <p className="mt-1 text-sm text-[#66737a]">
              Planner &amp; Program
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <NavLinks />

            <p className="text-xs text-[#66737a]">
              {currentDate}
            </p>
          </div>

        </div>
      </div>
    </header>
  );
}