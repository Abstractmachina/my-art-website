import Gutter from "@/app/components/layout/Gutter";
import { fetchBlogPosts } from "@/lib/fetchers/BlogPostFetchers";
import BlogPostGallery from "./_components/BlogPostGallery";
import { fetchSettings } from "@/lib/fetchers/settingsFetchers";
import BlogInMaintenance from "./_components/BlogInMaintenance";

const BlogPage = async () => {
  const blogPosts = await fetchBlogPosts();
  const settings = await fetchSettings();

  return (
    <Gutter>
      {process.env.NODE_ENV === "development" ? (
        <BlogPostGallery posts={blogPosts} />
      ) : settings?.blogLive ? (
        <BlogPostGallery posts={blogPosts} />
      ) : (
        <BlogInMaintenance />
      )}
    </Gutter>
  );
};

export default BlogPage;
