import { fetchArtworks } from "@/lib/fetchers/artworkFetchers";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const artworks = await fetchArtworks();

  if (!artworks) {
    return [];
  }

  return artworks.map((item) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/artwork/${item.slug}`,
      lastModified: new Date(),
    })
  );
}
