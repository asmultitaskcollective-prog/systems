# AS Multi-task Collective — website

The ASMC studio site: managed operations for trade businesses, built on
D'Workbench. One page plus a 404, built with [Astro](https://astro.build).

```sh
npm install
npm run dev     # http://localhost:4321/systems/
npm run build   # static output in dist/
```

## Hosting

The same build serves two hosts. `.github/workflows/deploy.yml` deploys to
GitHub Pages on every push to `main` (served under `/systems/`).

**Cloudflare Workers (static assets)** uses `wrangler.jsonc` and serves from the
root path. Any one of these works:

1. **Dashboard, no tokens:** Workers & Pages → Create → Import a repository →
   `asmultitaskcollective-prog/systems`. Build command `npm run build`, deploy
   command `npx wrangler deploy`. Workers Builds is detected automatically, so
   the site builds for the root path. Add a `SITE_URL` build variable with the
   final origin (e.g. `https://asmc-site.<subdomain>.workers.dev`).
2. **GitHub Actions:** add repository secrets `CLOUDFLARE_API_TOKEN` (template
   "Edit Cloudflare Workers") and `CLOUDFLARE_ACCOUNT_ID`, and a repository
   variable `CLOUDFLARE_SITE_URL`. The `cloudflare` job then deploys on every
   push to `main`.
3. **From this machine:** `npx wrangler login`, then build with
   `DEPLOY_TARGET=cloudflare` and run `npx wrangler deploy`.

`SITE_URL` sets canonical URLs; `BASE_PATH` overrides the path prefix.

## Editing

- Page copy: `src/pages/index.astro` (FAQ entries are the `faqs` list at the top).
- Styles and brand tokens: `src/styles/global.css`.
- The pilot form composes an email to asmultitaskcollective@gmail.com; there
  is no backend yet.
