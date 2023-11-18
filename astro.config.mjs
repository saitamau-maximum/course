import { defineConfig } from "astro/config";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import cloudflare from "@astrojs/cloudflare";
import rehypeCodeBlockCopy from "./src/libs/rehype-code-block-copy";
import rehypeHeadLinker from "./src/libs/rehype-head-linker";
import rehypeAnnotationBlock from "./src/libs/rehype-annotation-block";


import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [vanillaExtractPlugin()]
  },
  output: "server",
  markdown: {
    syntaxHighlight: "prism",
    rehypePlugins: [rehypeCodeBlockCopy, rehypeHeadLinker, rehypeAnnotationBlock]
  },
  adapter: cloudflare({
    runtime: {
      mode: "local"
    }
  }),
  integrations: [react()]
});
