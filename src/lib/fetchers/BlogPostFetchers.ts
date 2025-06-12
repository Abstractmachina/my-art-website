import { ArtBlogPost } from "@/types/payload-types";

export async function fetchBlogPosts() : Promise<ArtBlogPost[] | null> {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/blogposts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["blogposts"],
      },
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch artworks: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data as ArtBlogPost[];
  } catch (error) {
    console.error(error);
  }
  return null;
}