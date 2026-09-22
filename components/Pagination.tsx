import Link from "next/link";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  query: string;
};

export default function Pagination({
  totalPages,
  currentPage,
  query,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const createPageURL = (page: number) => {
    const params = new URLSearchParams();

    if (query) {
      params.set("query", query);
    }

    params.set("page", page.toString());

    return `/meetings?${params.toString()}`;
  };

  return (
    <nav
      className="mt-10 flex items-center justify-center gap-2"
      aria-label="Pagination"
    >
      {currentPage > 1 && (
        <Link
          href={createPageURL(currentPage - 1)}
          className="rounded-lg border border-[#D8CFC0] bg-[#FBF9F4] px-4 py-2 text-sm font-semibold text-[#26343B] hover:bg-[#F1ECE2]"
        >
          Previous
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <Link
            key={page}
            href={createPageURL(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${
              page === currentPage
                ? "bg-[#26343B] text-[#F4F0E8]"
                : "border border-[#D8CFC0] bg-[#FBF9F4] text-[#26343B] hover:bg-[#F1ECE2]"
            }`}
          >
            {page}
          </Link>
        );
      })}

      {currentPage < totalPages && (
        <Link
          href={createPageURL(currentPage + 1)}
          className="rounded-lg border border-[#D8CFC0] bg-[#FBF9F4] px-4 py-2 text-sm font-semibold text-[#26343B] hover:bg-[#F1ECE2]"
        >
          Next
        </Link>
      )}
    </nav>
  );
}