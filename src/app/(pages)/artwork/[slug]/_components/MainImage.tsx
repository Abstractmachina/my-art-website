import { Media } from "@/types/payload-types";
import Image from "next/image";

type Props = {
  image?: Media | null;
};

const MainImage = ({ image }: Props) => {
  return (
    <div>
      <Image
        src={image?.url || ""}
        alt={image?.alt || ""}
        width={image?.width || 0}
        height={image?.height || 0}
      />
    </div>
  );
};

export default MainImage;
