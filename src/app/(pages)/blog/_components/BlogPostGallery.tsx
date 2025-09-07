import { ArtBlogPost } from "@/types/payload-types";
import PostPreviewCard from "./PostPreviewCard";

type Props = {
  posts?: ArtBlogPost[] | null;
}

const BlogPostGallery = ({ posts }: Props) => {
  return (
    <section className="columns-3xs gap-4 gap-y-4 w-full">
      {
        posts?.map((post) => {
          return (
            <PostPreviewCard key={post.id} post={post}/>
          )
        })
      }
    </section>
  )
}

export default BlogPostGallery;