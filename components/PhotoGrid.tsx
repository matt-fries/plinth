import Link from "next/link";
import type { Photo } from "@/lib/types";
import { FadeImage } from "./FadeImage";

/**
 * Tight masonry: photos only, no text. Each photo keeps its own ratio and
 * flows down the columns. Width/height are known up front, so nothing
 * shifts while loading.
 */
export function PhotoGrid({
  photos,
  preloadFirst = false,
}: {
  photos: Photo[];
  preloadFirst?: boolean;
}) {
  return (
    <ul className="columns-2 gap-2 sm:gap-3 lg:columns-3 lg:gap-4">
      {photos.map((photo, i) => {
        return (
          <li key={photo.slug} className="mb-2 break-inside-avoid sm:mb-3 lg:mb-4">
            <Link href={`/photos/${photo.slug}`} className="group block bg-mat">
              <FadeImage
                src={photo.image.src}
                width={photo.image.width}
                height={photo.image.height}
                blurDataURL={photo.image.blurDataURL}
                alt={photo.alt}
                sizes="(min-width: 1440px) 450px, (min-width: 1024px) 32vw, 50vw"
                preload={preloadFirst && i === 0}
                className="h-auto w-full transition-opacity duration-500 ease-out group-hover:opacity-90"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
