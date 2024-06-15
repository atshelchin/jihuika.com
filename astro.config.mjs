import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
// import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import string from "vite-plugin-string";
// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), react(), tailwind()],
  // output: "server",
  // adapter: cloudflare()
  vite: {
    plugins: [
      string({
        include: [
          "**/*.txt", // 使所有 .txt 文件都通过这个插件处理
        ],
      }),
    ],
  },
});
