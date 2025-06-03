import { Artwork, Media } from "@/types/payload-types";
// import H1 from "./styledComponents/h1";
import Image from "next/image";
import Link from "next/link";

type Props = {
  artwork: Artwork;
};

const PreviewCard = ({ artwork }: Props) => {
  const coverImage = artwork.images[0] as Media;

  return (
    <Link href={ `/artwork/${artwork.slug}` } className="w-full">
      {/* <H1>{artwork.title}</H1> */}
      {/* <p>{artwork.description}</p> */}
      {/* <img src={artwork.image} alt={artwork.title} /> */}
      <Image
        src={coverImage?.url || "#"}
        alt={coverImage?.alt || ""}
        width={coverImage?.width || 0}
        height={coverImage?.height || 0}
        layout="responsive"
        objectFit="cover"
      />
    </Link>
  );
};

export default PreviewCard;
