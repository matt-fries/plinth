import Link from "next/link";
import { getCollections } from "@/lib/photos";
import { site } from "@/lib/site";
import { Container } from "./Container";
import { NavLinks } from "./NavLinks";
import { Wordmark } from "./Wordmark";

export function SiteHeader() {
  const links = [
    { href: "/", label: "Work" },
    ...getCollections().map((c) => ({ href: `/${c.slug}`, label: c.title })),
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header>
      <Container className="flex flex-col gap-5 pt-6 pb-10 sm:flex-row sm:items-center sm:justify-between sm:pt-8 sm:pb-16">
        <Link href="/" aria-label={`${site.name}, home`} className="self-start">
          <Wordmark />
        </Link>
        <nav aria-label="Main" className="font-mono text-xs tracking-wide uppercase">
          <NavLinks links={links} />
        </nav>
      </Container>
    </header>
  );
}
