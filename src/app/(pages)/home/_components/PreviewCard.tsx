import { Artwork, Media } from "@/types/payload-types";
// import H1 from "./styledComponents/h1";
import Image from "next/image";
import Link from "next/link";
import H3 from "../../../components/styledComponents/H3";

type Props = {
  artwork: Artwork;
};

const PreviewCard = ({ artwork }: Props) => {
  const coverImage = artwork.images[0] as Media;

  return (
    <Link href={ `/artwork/${artwork.slug}` } className="w-full group relative overflow-clip">
      <div className="absolute w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity px-4 text-center">
        <H3 className="text-white">{artwork?.title}</H3>
      </div>

      <Image
        className="mb-4 border border-zinc-100 shadow-sm"
        src={coverImage?.url || "#"}
        alt={coverImage?.alt || ""}
        width={coverImage?.width || 0}
        height={coverImage?.height || 0}
      />
    </Link>
  );
};

export default PreviewCard;
