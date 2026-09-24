// @ts-check
import { defineConfig } from "astro/config";

// The same build serves two hosts:
//   GitHub Pages (default): https://asmultitaskcollective-prog.github.io/systems/
//   Cloudflare Pages:       set SITE_URL to its origin and BASE_PATH=/
const site = process.env.SITE_URL || "https://asmultitaskcollective-prog.github.io";
const base = process.env.BASE_PATH || "/systems/";

export default defineConfig({
  site,
  base,
  trailingSlash: "ignore",
  build: { format: "directory" },
});
