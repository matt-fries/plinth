"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks({ links }: { links: { href: string; label: string }[] }) {
  const pathname = usePathname();

  return (
    <ul className="flex w-full justify-between gap-x-6 sm:w-auto sm:justify-end lg:gap-x-8">
      {links.map(({ href, label }) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={active ? "page" : undefined}
              className={`transition-colors duration-300 hover:text-ink ${
                active ? "text-ink underline decoration-1 underline-offset-[6px]" : "text-muted"
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
