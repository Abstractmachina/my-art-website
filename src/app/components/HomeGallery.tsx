import { Artwork } from "@/types/payload-types";
import PreviewCard from "./preview-card";

type Props = {
  artWork?: Artwork[] | null;
}

const HomeGallery = ({ artWork }: Props) => {
  


  return (
    <section className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-1 w-full">
      {
        artWork?.map((aw) => {
          return (
            <PreviewCard key={aw.id} artwork={aw}/>
          )
        })
      }
    </section>
  )
}

export default HomeGallery;