"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  if (pathname === "/" || pathname === "/login" || pathname === "/about")
    {
  return null;
    }

  const links = [
    { name: "Home", href: "/homepage" },
    { name: "Priority Plan", href: "/priority" },
    { name: "Schedule", href: "/schedule" },
    { name: "Profile", href: "/profile" },
    { name: "Settings", href: "/settings" },
    { name: "Streak Board", href: "/streak" },
  ];

  return (
    <nav className="flex flex-wrap items-center justify-between gap-3 bg-[#0B0B0D] border-b border-[#665323] px-6 py-4">
      <Link href="/homepage" className="text-2xl font-bold text-[#D4AF37]">
        RePlan.
      </Link>

      <div className="flex flex-wrap items-center gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-lg px-4 py-2 font-semibold transition ${
              pathname === link.href
                ? "bg-[#D4AF37] text-black"
                : "border border-[#665323] text-white hover:bg-[#D4AF37] hover:text-black"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
