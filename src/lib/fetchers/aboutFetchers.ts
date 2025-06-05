import { About } from "@/types/payload-types";

export async function fetchAbout() : Promise<About | null> {
  try {

    const res = await fetch(
      `${process.env.BACKEND_URL}/api/globals/about`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags:["about"],
        },
        cache: "force-cache",
      }, 
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch artworks: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    console.log("data", data);
    return data as About;

  } catch (error) {
    console.error(error);
  }
  return null;
}