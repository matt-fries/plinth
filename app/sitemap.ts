import type { MetadataRoute } from "next";
import { getAllPhotos, getCollections } from "@/lib/photos";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    ...getCollections().map((c) => `/${c.slug}`),
    ...getAllPhotos().map((p) => `/photos/${p.slug}`),
    "/about",
    "/contact",
  ];
  return paths.map((path) => ({ url: `${site.url}${path}` }));
}
