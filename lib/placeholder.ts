import type { PhotoImage } from "./types";

/** Flat mat-toned blur so placeholders fade up from the mount colour. */
const PAPER_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNlNmUyZGIiLz48L3N2Zz4=";

/** PLACEHOLDER ONLY — a seeded picsum image at a realistic aspect ratio. */
export function picsum(seed: string, width: number, height: number): PhotoImage {
  return {
    src: `https://picsum.photos/seed/${seed}/${width}/${height}`,
    width,
    height,
    blurDataURL: PAPER_BLUR,
  };
}

// Common ratios at a 1600px long edge.
export const RATIO = {
  landscape3x2: [1600, 1067],
  portrait2x3: [1067, 1600],
  wide16x9: [1600, 900],
  panorama3x1: [2400, 800],
} as const;
