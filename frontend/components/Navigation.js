"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { name: "Priority Plan", href: "/priority" },
    { name: "Schedule", href: "/schedule" },
  ];

  return (
    <nav className="flex justify-end gap-6 bg-[#0B0B0D] p-5 border-b border-[#D4AF37]">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={
            pathname === link.href
              ? "font-bold text-[#D4AF37]"
              : "text-white hover:text-[#D4AF37]"
          }
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}