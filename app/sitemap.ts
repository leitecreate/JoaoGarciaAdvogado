import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacidade"].map((path) => ({ url: `${site.url}${path}`, lastModified: new Date(site.updated) }));
}
