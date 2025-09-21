import { fetchArtworkBySlug } from "@/lib/fetchers/artworkFetchers";

type Props = {
  children: React.ReactNode;
    params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: Props) => {
  const {slug} = await params;

  const project = await fetchArtworkBySlug(slug, 2);

  if (!project) {
    return {
      title: "Artwork by Taole Chen",
      description: "This artwork was created by Taole Chen.",
    };
  }


  return {
      title: project.meta?.title || `${project.title} | Artwork by Taole Chen`,
  description: project.meta?.description ||
    "This artwork was created by Taole Chen.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/about-us`,
    },
    openGraph: {
      title: project.meta?.title || `${project.title} | Artwork by Taole Chen`,
      description: project.meta?.description ||
        "This artwork was created by Taole Chen.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/artwork/${project.slug}`,
      type: "article",
      images: project.meta?.image || project.images?.length
        ? project.images.map((img) => {
          if (typeof img === "string") {
            return undefined;
          }

          return {
            url: img.url || "",
            width: img.width || 0,
            height: img.height || 0,
          }})
        : [],
    },
    twitter: {
      title: project.meta?.title || `${project.title} | Artwork by Taole Chen`,
      description: project.meta?.description ||
        "This artwork was created by Taole Chen.",
      card: "summary_large_image",
      image: project.meta?.image,
      creator: "Taole Chen",
    },
  };
};

const ArtworkLayout = ({children}:Props) => {
  return (
    <>
      {children}
    </>
  )
}

export default ArtworkLayout;