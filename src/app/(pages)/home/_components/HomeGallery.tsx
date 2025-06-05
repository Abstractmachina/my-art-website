import { Artwork } from "@/types/payload-types";
import PreviewCard from "../../../components/preview-card";

type Props = {
  artWork?: Artwork[] | null;
}

const HomeGallery = ({ artWork }: Props) => {
  


  return (
    <section className="columns-3xs gap-4 w-full">
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