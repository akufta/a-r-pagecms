import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import remarkYoutubeShortcode from "./src/remark/youtubeShortcode";
import embeds from "astro-embed/integration";
import tailwindPlugin from "@tailwindcss/vite";

type AstroConfig = Parameters<typeof defineConfig>[0];
type AstroViteConfig = AstroConfig["vite"];
type AstroVitePlugin = AstroViteConfig extends { plugins?: Array<infer P> }
  ? P
  : never;

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [react(), sitemap(), embeds(), mdx()],
  markdown: {
    remarkPlugins: [
      remarkYoutubeShortcode,
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindPlugin() as AstroVitePlugin],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});
