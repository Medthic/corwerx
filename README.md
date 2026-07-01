# Corwerx

A React + Vite starter website with a polished landing page and a lightweight project structure.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run preview` serves the production build locally.
- `npm run deploy` deploys the built `dist` folder with Wrangler.

## Cloudflare Deployment

This project is ready for Cloudflare Workers static assets deployment.

- Build command: `npm run build`
- Build output directory: `dist`
- Deploy command: `npm run deploy`
- SPA fallback: `wrangler.toml` serves `index.html` for unknown routes
- Cloudflare config: `wrangler.toml`

Use `wrangler deploy --assets=./dist` for manual deploys.

If you deploy with the Cloudflare dashboard, point the project at the repository root and use the build output above.

## Stack

- React
- Vite