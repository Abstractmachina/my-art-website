import P from "@/app/components/styledComponents/P";
import { Media } from "@/types/payload-types";
import Image from "next/image";

type Props = {
  images?: Media[] | null;
};

const ImageGallery = ({ images }: Props) => {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <P className="w-80" variant="description">More images</P>

        <div className="flex flex-col gap-2">
          {images?.map((img) => (
            <Image
              key={img.id}
              src={img.url || ""}
              alt={img.alt || ""}
              width={img.width || 0}
              height={img.height || 0}
              layout="responsive"
              objectFit="cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
