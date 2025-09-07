import Gutter from "@/app/components/layout/Gutter";
import RichText from "@/app/components/RichText";
import H1 from "@/app/components/styledComponents/H1";
import P from "@/app/components/styledComponents/P";
import { ArtBlogPost } from "@/types/payload-types";
import Image from "next/image";

type Props = {
  post: ArtBlogPost | null;
};

const BlogPost = ({ post }: Props) => {

  if (!post) {
    return null;
  }
  const hero = typeof post.heroImage === "string" ? null : post.heroImage;
  return (
    <Gutter>
      <H1>{post?.title}</H1>
      <P variant="description">{post?.updatedAt}</P>

      <div className="bg-red-100 w-full max-h-96 h-96 aspect-square relative">
        <Image
          className="object-cover"
          fill
          src={hero?.url || ""}
          alt={hero?.alt || ""}
          // width={hero?.width || 0}
          // height={hero?.height || 0}
        />
      </div>
      
      <RichText data={ post.content } />

    </Gutter>
  );
};

export default BlogPost;
