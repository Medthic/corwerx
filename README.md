# Corwerx

A React + Vite starter website with a polished landing page and a lightweight project structure.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run preview` serves the production build locally.

## Cloudflare Deployment

This project is ready for Cloudflare Pages.

- Build command: `npm run build`
- Build output directory: `dist`
- SPA fallback: `public/_redirects` rewrites all routes to `index.html`
- Cloudflare config: `wrangler.toml`

GitHub pushes to `main` now trigger a Cloudflare Pages deploy through `.github/workflows/cloudflare-pages.yml`.
Set these repository secrets before the workflow can deploy:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

If you deploy from the Cloudflare dashboard, point the project at the repository root and use the build output above.

## Stack

- React
- Vite