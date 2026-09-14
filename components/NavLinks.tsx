"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/meetings", label: "Meetings" },
    { href: "/meetings/current", label: "Current" },
  ];

  return (
    <nav className="flex flex-wrap items-center gap-2">
      {links.map((link) => {
        const isActive =
          pathname === link.href ||
          (link.href === "/meetings" &&
            pathname.startsWith("/meetings/") &&
            pathname !== "/meetings/current");

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-[#8a6842] text-white shadow-sm"
                : "text-[#26343b] hover:bg-[#f4f0e8] hover:text-[#8a6842]"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}