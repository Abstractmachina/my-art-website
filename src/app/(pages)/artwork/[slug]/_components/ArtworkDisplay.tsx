import { Artwork } from "@/types/payload-types";
import ImageGallery from "./ImageGallery";
import InfoPanel from "./InfoPanel";
import MainImage from "./MainImage";

type Props = {
  artwork?: Artwork | null;
}

const ArtworkDisplay = ({ artwork }: Props) => {
  const images = artwork?.images.filter(img => typeof img !== "string");

  return (
    <main className="flex flex-col gap-12">
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <InfoPanel artwork={artwork}/>
        <MainImage image={ images? images[0] : undefined  } />
      </div>

      <ImageGallery images={ images } />
    </main>
  )
}

export default ArtworkDisplay;