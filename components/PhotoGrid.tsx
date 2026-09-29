import Link from "next/link";
import { isPanorama } from "@/lib/photos";
import type { Photo } from "@/lib/types";
import { Caption } from "./Caption";
import { FadeImage } from "./FadeImage";

/**
 * Uniform grid. Every photo is mounted on its own mat so each one reads as a
 * distinct object. On sm+ the mats are identical 4:3 cells with the photo
 * centred uncropped inside; panoramas take a full row. On mobile, mats run
 * full width at the photo's own ratio with index numbers, like a contact sheet.
 */
export function PhotoGrid({
  photos,
  preloadFirst = false,
}: {
  photos: Photo[];
  preloadFirst?: boolean;
}) {
  return (
    <ul className="grid grid-flow-row-dense grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20">
      {photos.map((photo, i) => {
        const pano = isPanorama(photo);
        return (
          <li key={photo.slug} className={pano ? "sm:col-span-full" : undefined}>
            <Link href={`/photos/${photo.slug}`} className="group block">
              <div className="bg-mat p-5 transition-colors duration-500 ease-out group-hover:bg-[#fdfcfa] sm:p-6 lg:p-8">
                <div
                  className={
                    pano ? "" : "sm:flex sm:aspect-[4/3] sm:items-center sm:justify-center"
                  }
                >
                  <FadeImage
                    src={photo.image.src}
                    width={photo.image.width}
                    height={photo.image.height}
                    blurDataURL={photo.image.blurDataURL}
                    alt={photo.alt}
                    sizes={
                      pano
                        ? "(min-width: 1440px) 1344px, (min-width: 640px) 90vw, 100vw"
                        : "(min-width: 1440px) 420px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    }
                    preload={preloadFirst && i === 0}
                    className={`h-auto w-full ${
                      pano ? "" : "object-contain sm:max-h-full sm:w-auto sm:max-w-full"
                    }`}
                  />
                </div>
              </div>
              <div className="mt-3 transition-transform duration-500 ease-out group-hover:translate-x-1">
                <Caption photo={photo} index={i} />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
