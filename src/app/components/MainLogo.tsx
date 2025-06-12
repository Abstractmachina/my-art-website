import { Media } from "@/types/payload-types";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Props = {
  image?: Media | null;
  className?: string;
};

const MainLogo = ({ image, className }: Props) => {
  return (
    <Link
      href="/"
      className={twMerge("flex w-40 h-20 items-center ", className)}
    >
      {image ? (
        <div>
          <Image
            className="mb-2"
            src={image.url || ""}
            alt={image.alt || ""}
            width={image.width || 0}
            height={image.height || 0}
          />
        </div>
      ) : (
        "taole chen"
      )}
    </Link>
  );
};

export default MainLogo;
