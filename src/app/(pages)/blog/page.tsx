import Gutter from "@/app/components/layout/Gutter";
import { fetchBlogPosts } from "@/lib/fetchers/BlogPostFetchers";

type Props = {
}

const BlogPage = async (props: Props) => {
  const blogPosts = await fetchBlogPosts();

  return (
    <Gutter>
      asdf
    </Gutter>
  )
}

export default BlogPage;