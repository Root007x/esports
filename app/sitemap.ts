import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://innerpeace.gg"; // replace with your domain
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/roster`, lastModified: new Date() },
    { url: `${base}/matches`, lastModified: new Date() },
    { url: `${base}/games`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
  ];
}
