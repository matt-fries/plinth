import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { FadeImage } from "@/components/FadeImage";
import { PhotoKeys } from "@/components/PhotoKeys";
import { getAllPhotos, getCollection, getNeighbours, getPhoto } from "@/lib/photos";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPhotos().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/photos/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const photo = getPhoto(slug);
  if (!photo) return {};
  const description = `${photo.title} — ${photo.location}, ${photo.year}.`;
  return {
    title: photo.title,
    description,
    openGraph: {
      title: photo.title,
      description,
      images: [
        {
          url: photo.image.src,
          width: photo.image.width,
          height: photo.image.height,
          alt: photo.alt,
        },
      ],
    },
  };
}

export default async function PhotoPage(props: PageProps<"/photos/[slug]">) {
  const { slug } = await props.params;
  const photo = getPhoto(slug);
  if (!photo) notFound();

  const collection = getCollection(photo.collection)!;
  const { prev, next, index, total } = getNeighbours(photo);
  const backHref = `/${collection.slug}`;

  return (
    <Container>
      <PhotoKeys prev={`/photos/${prev.slug}`} next={`/photos/${next.slug}`} back={backHref} />

      <article className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="flex items-center justify-center bg-mat p-4 sm:p-8 lg:col-span-8 lg:self-start lg:p-12">
          <FadeImage
            key={photo.slug}
            src={photo.image.src}
            width={photo.image.width}
            height={photo.image.height}
            blurDataURL={photo.image.blurDataURL}
            alt={photo.alt}
            sizes="(min-width: 1440px) 1000px, (min-width: 1024px) 70vw, 100vw"
            preload
            className="h-auto max-h-[74dvh] w-auto max-w-full object-contain"
          />
        </div>

        <aside className="flex flex-col gap-10 font-mono text-xs lg:col-span-4 xl:col-span-3 xl:col-start-10">
          <header className="space-y-2">
            <p className="text-muted tabular-nums">
              <Link href={backHref} className="hover:text-ink">
                {collection.title}
              </Link>{" "}
              · {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
            <h1 className="pt-2 font-display text-2xl leading-[0.95] uppercase">{photo.title}</h1>
            <p className="text-muted">
              {photo.location}, {photo.year}
            </p>
            {photo.placeholder && (
              <p className="pt-2 text-muted italic">Placeholder image — caption is illustrative.</p>
            )}
          </header>

          <nav aria-label="Photo navigation" className="border-t border-rule pt-6">
            <ul className="flex justify-between gap-4">
              <li>
                <Link
                  href={`/photos/${prev.slug}`}
                  scroll={false}
                  className="text-muted hover:text-ink"
                >
                  ← Prev
                </Link>
              </li>
              <li>
                <Link href={backHref} className="text-muted hover:text-ink">
                  Index
                </Link>
              </li>
              <li>
                <Link
                  href={`/photos/${next.slug}`}
                  scroll={false}
                  className="text-muted hover:text-ink"
                >
                  Next →
                </Link>
              </li>
            </ul>
            <p className="mt-4 hidden text-muted lg:block">Use ← → to browse, Esc to return.</p>
          </nav>
        </aside>
      </article>
    </Container>
  );
}
