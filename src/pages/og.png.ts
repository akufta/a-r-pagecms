import type { APIRoute } from "astro";
import { generateOgImageForSite } from "@utils/generateOgImages";

export const GET: APIRoute = async () => {
  const imageBuffer = await generateOgImageForSite();
  const imageArray = new Uint8Array(imageBuffer);
  const blob = new Blob([imageArray.buffer], { type: "image/png" });
  return new Response(blob, {
    headers: { "Content-Type": "image/png" },
  });
};
