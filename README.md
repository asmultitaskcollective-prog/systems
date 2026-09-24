# AS Multi-task Collective — website

The ASMC studio site: managed operations for trade businesses, built on
D'Workbench. One page plus a 404, built with [Astro](https://astro.build).

```sh
npm install
npm run dev     # http://localhost:4321/systems/
npm run build   # static output in dist/
```

## Hosting

The same build serves two hosts, chosen by environment variables:

| Host | `SITE_URL` | `BASE_PATH` |
| --- | --- | --- |
| GitHub Pages (default, deployed by `.github/workflows/deploy.yml`) | `https://asmultitaskcollective-prog.github.io` | `/systems/` |
| Cloudflare Pages | the Pages origin, e.g. `https://asmc.pages.dev` | `/` |

For Cloudflare Pages: build command `npm run build`, output directory `dist`,
Node 22, and the two variables above.

## Editing

- Page copy: `src/pages/index.astro` (FAQ entries are the `faqs` list at the top).
- Styles and brand tokens: `src/styles/global.css`.
- The pilot form composes an email to asmultitaskcollective@gmail.com; there
  is no backend yet.
