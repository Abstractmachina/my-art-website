import { ArtBlogPost } from "@/types/payload-types";
import qs from "qs";

export async function fetchBlogPosts() : Promise<ArtBlogPost[] | null> {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/artBlogPosts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["artBlogPosts"],
      },
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch artworks: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data["docs"] as ArtBlogPost[];
  } catch (error) {
    console.error(error);
  }
  return null;
}

export async function fetchBlogPostBySlug(slug:string, depth?:number) : Promise<ArtBlogPost | null> {
  try {

    const query = {
      slug: {
        equals: slug,
      },
    };

    const queryString = qs.stringify(
      {
        // sort: "-createdAt",
        where: query,
        depth: depth || 3,
        limit: 0,
      },
      { addQueryPrefix: true }
    );

    const res = await fetch(
      `${process.env.BACKEND_URL}/api/artBlogPosts${queryString}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags:["artBlogPosts"],
        },
        cache: "force-cache",
      }, 
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch art blog post: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data["docs"][0] as ArtBlogPost;

  } catch (error) {
    console.error(error);
  }
  return null;
}