import { Artwork } from "@/types/payload-types";
import ImageGallery from "./ImageGallery";
import InfoPanel from "./InfoPanel";
import MainImage from "./MainImage";
import Line from "@/app/components/visuals/Line";
import Gutter from "@/app/components/layout/Gutter";

type Props = {
  artwork?: Artwork | null;
}

const ArtworkDisplay = ({ artwork }: Props) => {
  const images = artwork?.images.filter(img => typeof img !== "string");

  return (
    <main className="flex flex-col relative">

      <Gutter >
        <div className="flex flex-col md:flex-row gap-4 w-full py-4 pl-8">
          <InfoPanel artwork={artwork}/>
          <MainImage image={ images? images[0] : undefined  } />
        </div>
      </Gutter>

      <Line orientation="horizontal"/>

      <Gutter>
        <ImageGallery images={ images?.splice(1) } className="pl-8 pt-4"/>
      </Gutter>
    </main>
  )
}

export default ArtworkDisplay;