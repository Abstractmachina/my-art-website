import Gutter from "@/app/components/layout/Gutter";
import { fetchBlogPosts } from "@/lib/fetchers/BlogPostFetchers";
import BlogPostGallery from "./_components/BlogPostGallery";



const BlogPage = async () => {
  const blogPosts = await fetchBlogPosts();

  return (
    <Gutter>
          <BlogPostGallery posts={blogPosts} />
    </Gutter>
  )
}

export default BlogPage;