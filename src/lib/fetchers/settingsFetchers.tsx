import { ArtSiteSetting } from "@/types/payload-types";

export async function fetchSettings() : Promise<ArtSiteSetting | null> {
  try {

    const res = await fetch(
      `${process.env.BACKEND_URL}/api/globals/artSiteSettings`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `users API-Key ${process.env.PAYLOAD_API_KEY}`,
        },
        next: {
          tags:["artSiteSettings"],
        },
        cache: "force-cache",
      }, 
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch settings: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    console.log(data);
    return data as ArtSiteSetting;

  } catch (error) {
    console.error(error);
  }
  return null;
}