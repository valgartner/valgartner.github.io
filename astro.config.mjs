import { defineConfig } from "astro/config";
import { CONFIG } from "./src/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import playformCompress from "@playform/compress";

export default defineConfig({
  site: "https://valgartner.github.io",
  integrations: [sitemap(), mdx(), playformCompress()],
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
      langs: [],
    },
  },
  content: {
    collections: {
      posts: {
        schema: "src/content/config.ts#posts",
      },
      finds: {
        schema: "src/content/config.ts#finds",
      },
    },
  },
});
