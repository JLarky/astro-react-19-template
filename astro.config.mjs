import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react()],
  output: "hybrid",
  experimental: {
    actions: true,
  },
  adapter: node({
    mode: "standalone",
  }),
});
