import { Logos } from "@/types/extracted-payload-types";

export async function fetchLogos() {
  try {
      const res = await fetch(
        `${process.env.BACKEND_URL}/api/globals/graphics`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          next: {
            tags:["graphics"],
          },
          cache: "force-cache",
        }, 
      );
  
      if (!res.ok) {
        throw new Error(`Failed to fetch artworks: ${res.status} ${res.statusText}`);
      }
  
    const data = await res.json();
      return data["logos"] as Logos;
  
    } catch (error) {
      console.error(error);
    }
    return null;
}