import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PhotoGrid } from "@/components/PhotoGrid";
import { getCollection, getCollections, getPhotosInCollection } from "@/lib/photos";

// Only collections defined in data/photos.ts exist; everything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return getCollections().map((c) => ({ collection: c.slug }));
}

export async function generateMetadata(props: PageProps<"/[collection]">): Promise<Metadata> {
  const { collection: slug } = await props.params;
  const collection = getCollection(slug);
  return collection ? { title: collection.title, description: collection.description } : {};
}

export default async function CollectionPage(props: PageProps<"/[collection]">) {
  const { collection: slug } = await props.params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const photos = getPhotosInCollection(slug);

  return (
    <Container>
      <header className="mb-12 grid gap-4 border-t-2 border-ink pt-5 sm:mb-20 lg:grid-cols-12">
        <h1 className="font-display text-4xl leading-none uppercase sm:text-6xl lg:col-span-6">
          {collection.title}
          <span className="ml-3 align-top font-mono text-xs font-normal tracking-normal text-muted tabular-nums">
            {String(photos.length).padStart(2, "0")}
          </span>
        </h1>
        <p className="max-w-md font-mono text-xs leading-relaxed text-muted lg:col-span-4 lg:col-start-9 lg:self-end">
          {collection.description}
        </p>
      </header>
      <PhotoGrid photos={photos} preloadFirst />
    </Container>
  );
}
