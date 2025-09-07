import H3 from "@/app/components/styledComponents/H3";
import { ArtBlogPost } from "@/types/payload-types";
import Link from "next/link";
import Image from "next/image";

type Props = {
  post: ArtBlogPost | null;
}

const PostPreviewCard = ({ post }: Props) => {
  

  if (!post) {
    return null;
  }

  const coverImage = typeof post.heroImage === "string" ? null : post.heroImage;

  return (
     <Link href={ `/blog/${post.slug}` } className="w-full group relative overflow-clip">
      <div className="absolute w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity px-4 text-center">
        <H3 className="text-white">{post?.title}</H3>
      </div>

      <Image
        className="mb-4"
        src={coverImage?.url || "#"}
        alt={coverImage?.alt || ""}
        width={coverImage?.width || 0}
        height={coverImage?.height || 0}
      />
    </Link>
  )
}

export default PostPreviewCard;