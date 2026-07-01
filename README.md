# Corwerx

A React + Vite starter website with a polished landing page and a lightweight project structure.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run preview` serves the production build locally.
- `npm run deploy` deploys the built `dist` folder to Cloudflare Pages.

## Cloudflare Deployment

This project is ready for Cloudflare Pages.

- Build command: `npm run build`
- Build output directory: `dist`
- Deploy command: `npm run deploy`
- SPA fallback: `public/_redirects` rewrites all routes to `index.html`
- Cloudflare config: `wrangler.toml`

Use `wrangler pages deploy dist --project-name corwerx` for manual deploys. `wrangler deploy` is the Worker command and will fail on this Pages project without a Worker entry point.

If you deploy with the Cloudflare dashboard, point the project at the repository root and use the build output above.

## Stack

- React
- Vite