import { site } from "@/lib/site";

/** The M.F stamp: a solid ink block with the mark knocked out. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block bg-ink px-2.5 pt-1.5 pb-1 font-display text-lg leading-none text-paper ${className}`}
    >
      {site.mark}
    </span>
  );
}
