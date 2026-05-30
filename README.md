# Zongyao Yang Portfolio

A React and TypeScript personal portfolio built from Zongyao Yang's resume.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## GitHub Pages Deployment

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push the project to a GitHub repository.
2. In the repository settings, enable GitHub Pages with GitHub Actions as the source.
3. Push to the `main` branch.

The Vite `base` is set to `./`, so the site works both at a user page and a project page URL.
