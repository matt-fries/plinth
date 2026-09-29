"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/** ← / → step through the collection, Esc returns to it. */
export function PhotoKeys({ prev, next, back }: { prev: string; next: string; back: string }) {
  const router = useRouter();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey || e.defaultPrevented) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable]")) return;

      const href = { ArrowLeft: prev, ArrowRight: next, Escape: back }[e.key];
      if (href) {
        e.preventDefault();
        router.push(href, { scroll: false });
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, back, router]);

  return null;
}
