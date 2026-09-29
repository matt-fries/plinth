/**
 * Photo data model. Everything a gallery or detail view needs is described
 * here. See data/photos.ts for the content.
 */

/**
 * Anything with src/width/height works — a static import of a local file
 * (`import img from "@/public/photos/x.jpg"`, which also supplies an automatic
 * blurDataURL) or a plain object for a remote URL.
 */
export interface PhotoImage {
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
}

export interface Collection {
  /** URL segment: /street, /landscape, ... */
  slug: string;
  title: string;
  description: string;
}

export interface Photo {
  /** Unique, URL-safe. Becomes /photos/<slug>, e.g. "street-01". */
  slug: string;
  /** Describe what is in the frame for screen-reader users. Never shown. */
  alt: string;
  collection: string;
  /** Optional. Only shown on the photo's own page. */
  location?: string;
  image: PhotoImage;
  /** Shown in "Selected Work" on the home page. */
  featured?: boolean;
  /** True for picsum stand-ins. Remove when swapping in real work. */
  placeholder?: boolean;
}
