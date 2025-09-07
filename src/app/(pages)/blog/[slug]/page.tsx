import { fetchBlogPostBySlug, fetchBlogPosts } from "@/lib/fetchers/BlogPostFetchers";
import BlogPost from "./_components/BlogPost";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();

  return posts?.map(p => ({
    slug: p.slug
  }));
}

const BlogPostPage = async ({ params }: Props) => {
  const {slug} = await params;
  const post = await fetchBlogPostBySlug(slug);


  return (
    <main>
      <BlogPost post={post}/>
    </main>
  )
}

export default BlogPostPage;