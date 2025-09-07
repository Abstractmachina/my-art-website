import { fetchArtworkBySlug, fetchArtworks } from "@/lib/fetchers/artworkFetchers";
import ArtworkDisplay from "./_components/ArtworkDisplay";

type Props = {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() : Promise<{slug: string}[]>  {
  const artworks = await fetchArtworks();


  if (!artworks || artworks.length === 0) return [];

  return artworks?.map(aw => ({
    slug: aw.slug
  }));
}

const ArtworkPage = async ({ params }: Props) => {
  const {slug} = await params;
  const artwork = await fetchArtworkBySlug(slug, 2);
  
  return (
    <ArtworkDisplay artwork={artwork}/>
  )
}

export default ArtworkPage;