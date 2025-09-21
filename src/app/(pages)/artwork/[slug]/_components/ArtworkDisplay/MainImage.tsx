import { Media } from "@/types/payload-types";
import { cn } from "@/utils/tailwind/cn";
import Image from "next/image";

type Props = {
  image?: Media | null;
  className?: string;
};

const MainImage = ({ image, className }: Props) => {
  return (
    <div className={cn("w-full", className)}>
      <Image
        src={image?.url || ""}
        alt={image?.alt || ""}
        width={image?.width || 0}
        height={image?.height || 0}
        className="shadow-sm border border-zinc-100 basis-1/2 w-full"
      />
    </div>
  );
};

export default MainImage;
