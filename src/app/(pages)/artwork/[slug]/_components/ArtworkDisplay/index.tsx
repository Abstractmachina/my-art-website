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
        {/* desktop */}
        <div className="flex gap-4 w-full py-4 px-4 max-lg:hidden">
          <InfoPanel artwork={artwork}/>
          <MainImage image={ images? images[0] : undefined  } />
        </div>
        {/* mobile */}
        <div className="flex flex-col lg:flex-row gap-4 w-full lg:hidden">
          <MainImage image={ images? images[0] : undefined  } />
          <InfoPanel artwork={artwork}/>
        </div>
      </Gutter>

      <Line orientation="horizontal"/>

      <Gutter>
        <ImageGallery images={ images?.splice(1) } className="pt-4"/>
      </Gutter>
    </main>
  )
}

export default ArtworkDisplay;