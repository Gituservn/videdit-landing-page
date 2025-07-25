// @ts-checkAdd commentMore actions
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "ua"],
    defaultLocale: "ua",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss(), svgr()],
  },
  integrations: [
    icon({
      iconDir: "src/assets/icons",
    }),
    react(),
  ],
});
