import { site } from "@/lib/site";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="mt-32 sm:mt-48">
      <Container className="flex flex-col gap-4 border-t-2 border-ink py-8 font-mono text-xs text-muted sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name} · Calgary, AB
        </p>
        <ul className="flex gap-6">
          <li>
            <a href={`mailto:${site.email}`} className="hover:text-ink">
              Email
            </a>
          </li>
          <li>
            <a
              href={site.instagram.url}
              rel="me noopener"
              target="_blank"
              className="hover:text-ink"
            >
              Instagram
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
