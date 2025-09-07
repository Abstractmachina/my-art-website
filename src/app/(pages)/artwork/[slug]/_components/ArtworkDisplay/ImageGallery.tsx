import P from "@/app/components/styledComponents/P";
import { Media } from "@/types/payload-types";
import { cn } from "@/utils/tailwind/cn";
import Image from "next/image";

type Props = {
  images?: Media[] | null;
  className?: string;
};

const ImageGallery = ({ images,className }: Props) => {
  return (
    <section className={cn("flex flex-col lg:flex-row gap-4 w-full", className)}>
        <P className="min-w-80 w-80 shrink-0 px-4" variant="description">More images</P>

        <div className="flex flex-col gap-4">
          {images?.map((img) => (
            <Image
              key={img.id}
              src={img.url || ""}
              alt={img.alt || ""}
              width={img.width || 0}
              height={img.height || 0}
              objectFit="cover"
              className=" border border-gray-100 shadow-sm"
            />
          ))}
        </div>
    </section>
  );
};

export default ImageGallery;
