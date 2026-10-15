import { defineConfig } from "astro/config";
import rehypeSlug from "rehype-slug";
import { rehypeFigure } from "./src/lib/rehype-figure.mjs";

export default defineConfig({
  site: "https://www.6th.pl",
  trailingSlash: "always",
  compressHTML: true,
  markdown: {
    rehypePlugins: [rehypeSlug, rehypeFigure],
    smartypants: false,
  },
});
