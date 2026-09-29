import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Container>
      <div className="grid gap-12 border-t-2 border-ink pt-5 lg:grid-cols-12">
        <h1 className="font-display text-4xl leading-none uppercase sm:text-6xl lg:col-span-5">
          About
        </h1>

        <div className="space-y-6 font-sans text-lg leading-relaxed lg:col-span-6 lg:col-start-6">
          {/* PLACEHOLDER BIO — replace with your own words. */}
          <p>
            I&rsquo;m a street and landscape photographer based in Calgary, Alberta. My street work
            stays close to home — the +15 walkways, the C-Train platforms, the long shadows on
            Stephen Avenue in winter.
          </p>
          <p>
            The landscape work runs west into the Rockies and east onto the prairie, usually at the
            edges of the day and often in weather most people wait out. Both bodies of work share
            the same instinct: find the quiet structure in a scene and wait for it to resolve.
          </p>

          <section aria-labelledby="gear" className="border-t border-rule pt-6">
            <h2 id="gear" className="font-mono text-xs tracking-wide text-muted uppercase">
              Gear
            </h2>
            <p className="mt-3 font-mono text-sm leading-relaxed">
              Fujifilm throughout. An X100VI for the street, an X-T5 with a small set of XF zooms
              for the mountains. Most images are finished close to how they came out of camera.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}
