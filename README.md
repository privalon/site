# Privalon Site

The official landing page for [Privalon](https://github.com/privalon/privalon) — an open-source blueprint for deploying and operating a private digital ecosystem.

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

The GitHub Actions workflow (`.github/workflows/deploy.yml`) is configured to deploy **manually only** — it will **not** trigger automatically on push.

To publish the site:

1. Go to the **Actions** tab in this repository.
2. Click **"Run workflow"** on the "Deploy to GitHub Pages" workflow.
3. Select the `main` branch and confirm.

The site will be built and deployed to `https://privalon.github.io/site/`.

> **Note:** Before publishing, make sure GitHub Pages is enabled in the repository settings with **Source: GitHub Actions**.

## Structure

```
src/
  layouts/
    BaseLayout.astro   # Global styles and HTML shell
  pages/
    index.astro        # Main landing page
public/
  ui-deploy-form.webp  # Web UI screenshot — deploy form
  ui-deploy-log.webp   # Web UI screenshot — live log
.github/
  workflows/
    deploy.yml         # Manual-only GitHub Pages deployment workflow
```
