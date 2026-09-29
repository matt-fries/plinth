import Link from "next/link";
import { Caption } from "@/components/Caption";
import { Container } from "@/components/Container";
import { FadeImage } from "@/components/FadeImage";
import { PhotoGrid } from "@/components/PhotoGrid";
import { getCollections, getFeaturedPhotos, getHeroPhoto } from "@/lib/photos";
import { site } from "@/lib/site";

export default function HomePage() {
  const hero = getHeroPhoto();
  const featured = getFeaturedPhotos();

  return (
    <>
      <Container>
        <section
          aria-label="Introduction"
          className="flex flex-col justify-between gap-10 bg-ink px-5 pt-6 pb-5 text-paper sm:flex-row sm:items-end sm:px-8 sm:pt-10 sm:pb-8"
        >
          <h1 className="font-display text-[clamp(5.5rem,26vw,20rem)] leading-[0.78] tracking-[-0.05em]">
            {site.mark}
            <span className="sr-only"> — {site.name}, photographer</span>
          </h1>
          <p className="max-w-xs font-mono text-xs leading-relaxed text-paper/70 sm:pb-2 sm:text-right">
            Street and landscape photography.
            <br />
            Calgary, Alberta.
          </p>
        </section>

        <figure className="mt-4 sm:mt-6">
          <Link href={`/photos/${hero.slug}`} className="block bg-mat p-4 sm:p-8 lg:p-12">
            <FadeImage
              src={hero.image.src}
              width={hero.image.width}
              height={hero.image.height}
              blurDataURL={hero.image.blurDataURL}
              alt={hero.alt}
              sizes="(min-width: 1440px) 1344px, 100vw"
              preload
              className="h-auto w-full"
            />
          </Link>
          <figcaption className="mt-3">
            <Caption photo={hero} />
          </figcaption>
        </figure>
      </Container>

      <Container className="mt-32 sm:mt-48">
        <section aria-labelledby="selected-work">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-t-2 border-ink pt-5 sm:mb-16">
            <h2
              id="selected-work"
              className="font-display text-4xl leading-none uppercase sm:text-6xl"
            >
              Selected Work
            </h2>
            <ul className="flex gap-6 font-mono text-xs text-muted">
              {getCollections().map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="hover:text-ink">
                    {c.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <PhotoGrid photos={featured} />
        </section>
      </Container>
    </>
  );
}
