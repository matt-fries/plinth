import { collections, heroSlug, photos } from "@/data/photos";
import type { Collection, Photo } from "./types";

// Fail loudly in dev/build if the data file has a typo.
const seen = new Set<string>();
for (const p of photos) {
  if (seen.has(p.slug)) throw new Error(`Duplicate photo slug: "${p.slug}"`);
  seen.add(p.slug);
  if (!collections.some((c) => c.slug === p.collection)) {
    throw new Error(`Photo "${p.slug}" has unknown collection "${p.collection}"`);
  }
}

export function getCollections(): readonly Collection[] {
  return collections;
}

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getPhotosInCollection(slug: string): Photo[] {
  return photos.filter((p) => p.collection === slug);
}

export function getFeaturedPhotos(): Photo[] {
  return photos.filter((p) => p.featured && p.slug !== heroSlug);
}

export function getHeroPhoto(): Photo {
  return photos.find((p) => p.slug === heroSlug) ?? photos[0];
}

export function getPhoto(slug: string): Photo | undefined {
  return photos.find((p) => p.slug === slug);
}

export function getAllPhotos(): readonly Photo[] {
  return photos;
}

/** Previous/next within the photo's own collection, wrapping at the ends. */
export function getNeighbours(photo: Photo) {
  const list = getPhotosInCollection(photo.collection);
  const i = list.findIndex((p) => p.slug === photo.slug);
  return {
    index: i,
    total: list.length,
    prev: list[(i - 1 + list.length) % list.length],
    next: list[(i + 1) % list.length],
  };
}

export function isPanorama(photo: Photo): boolean {
  return photo.image.width / photo.image.height >= 2.2;
}
