import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Container>
      <div className="grid gap-12 border-t-2 border-ink pt-5 lg:grid-cols-12">
        <h1 className="font-display text-4xl leading-none uppercase sm:text-6xl lg:col-span-5">
          Contact
        </h1>

        <div className="space-y-10 lg:col-span-6 lg:col-start-6">
          <p className="font-sans text-lg leading-relaxed">
            For editorial or licensing enquiries, email is best.
          </p>
          <dl className="grid grid-cols-[6rem_1fr] gap-y-4 font-mono text-sm">
            <dt className="text-muted">Email</dt>
            <dd>
              <a
                href={`mailto:${site.email}`}
                className="underline decoration-1 underline-offset-4 hover:text-muted"
              >
                {site.email}
              </a>
            </dd>
            <dt className="text-muted">Instagram</dt>
            <dd>
              <a
                href={site.instagram.url}
                rel="me noopener"
                target="_blank"
                className="underline decoration-1 underline-offset-4 hover:text-muted"
              >
                @{site.instagram.handle}
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </Container>
  );
}
