import type { Photo } from "@/lib/types";

/** "Rain on 8th Ave — Calgary, AB, 2026" in small mono. */
export function Caption({ photo, index }: { photo: Photo; index?: number }) {
  return (
    <p className="flex gap-3 font-mono text-xs leading-relaxed">
      {index !== undefined && (
        <span className="text-muted tabular-nums" aria-hidden>
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <span>
        <span className="text-ink">{photo.title}</span>
        <span className="text-muted">
          {" "}
          — {photo.location}, {photo.year}
        </span>
      </span>
    </p>
  );
}
