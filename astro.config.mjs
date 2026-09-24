// @ts-check
import { defineConfig } from "astro/config";

// One build, two hosts:
//   GitHub Pages (default)  https://asmultitaskcollective-prog.github.io/systems/
//   Cloudflare Workers      root path; detected in Workers Builds (WORKERS_CI)
//                           or forced with DEPLOY_TARGET=cloudflare
// SITE_URL sets the canonical origin; BASE_PATH overrides the path prefix.
const cloudflare = process.env.WORKERS_CI === "1" || process.env.DEPLOY_TARGET === "cloudflare";
const site = process.env.SITE_URL || "https://asmultitaskcollective-prog.github.io";
const base = process.env.BASE_PATH || (cloudflare ? "/" : "/systems/");

export default defineConfig({
  site,
  base,
  trailingSlash: "ignore",
  build: { format: "directory" },
});
