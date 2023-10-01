import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import purgeCss from "vite-plugin-tailwind-purgecss";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src/",
    },
  },
  plugins: [
    sveltekit(),
    purgeCss({
      safelist: {
        greedy: [/^hljs-/],
      },
    }),
  ],
});
