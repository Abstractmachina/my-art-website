import { Artwork } from "@/types/payload-types";
import qs from "qs";


export async function fetchArtworks(depth?: number) : Promise<Artwork[] | null> {
  try {

    // const query = {
    //   displayStatus: {
    //     not_equals: "hidden",
    //   },
    // };

    const queryString = qs.stringify(
      {
        // sort: "-createdAt",
        depth: depth || 0,
        limit: 0,
      },
      { addQueryPrefix: true }
    );

    const res = await fetch(
      `${process.env.BACKEND_URL}/api/artwork${queryString}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags:["artwork", "artTags", "media"],
        },
        cache: "force-cache",
      }, 
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch artworks: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data["docs"] as Artwork[];

  } catch (error) {
    console.error(error);
  }
  return null;
}

export async function fetchArtworkBySlug(slug:string, depth?:number) : Promise<Artwork | null> {
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
        depth: depth || 0,
        limit: 0,
      },
      { addQueryPrefix: true }
    );

    const res = await fetch(
      `${process.env.BACKEND_URL}/api/artwork${queryString}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags:["artwork", "artTags", "media"],
        },
        cache: "force-cache",
      }, 
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch artworks: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data["docs"][0] as Artwork;

  } catch (error) {
    console.error(error);
  }
  return null;
}