# Corwerx

A React + Vite starter website with a polished landing page and a lightweight project structure.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run preview` serves the production build locally.

## Cloudflare Deployment

This project is ready for Cloudflare Workers with static assets.

- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Build output directory: `dist`
- Worker entrypoint: `src/worker.js`
- Cloudflare config: `wrangler.toml`

GitHub pushes to `main` now trigger a Cloudflare Worker deploy through `.github/workflows/cloudflare-pages.yml`.
Set these repository secrets before the workflow can deploy:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

If you deploy from the Cloudflare dashboard, point the project at the repository root, build with `npm run build`, and deploy with Wrangler.

## Stack

- React
- Vite