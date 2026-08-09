# Privalon Site

The official landing page for [Privalon](https://github.com/privalon/privalon) — a source-available blueprint for deploying and operating a private digital ecosystem.

Built with [Astro](https://astro.build), styled with a custom Dark Terminal design. Configured for [GitHub Pages](https://pages.github.com) deployment.

## Development

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm dev

# Build for production
pnpm build

# Preview the production build locally
pnpm preview
```

## Publishing to GitHub Pages

The GitHub Actions workflow (`.github/workflows/deploy.yml`) is configured to deploy automatically from the `production` branch.

To publish the site:

1. Push or merge changes into the `production` branch.
2. The "Deploy to GitHub Pages" workflow will run automatically.

You can still run it manually from the **Actions** tab using **"Run workflow"** if needed.

The site will be built and deployed to `https://privalon.net` (custom domain, see `public/CNAME`).

> **Note:** Before publishing, make sure GitHub Pages is enabled in the repository settings with **Source: GitHub Actions**.

## Structure

```
src/
  layouts/
    BaseLayout.astro   # Global styles and HTML shell
  pages/
    index.astro        # Main landing page — hero, features, app catalog,
                        # architecture, dashboard mockup, roadmap
.github/
  workflows/
    deploy.yml         # Auto deploy on push to production
```

The dashboard shown on the landing page (`#dashboard` section) is hand-coded markup
styled to match the real local Web UI, not a screenshot — update it directly in
`index.astro` when the real dashboard's layout changes, rather than swapping in an image.
