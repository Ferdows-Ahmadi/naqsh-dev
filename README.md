# Naqsh Digital Studio

Premium static landing page for Naqsh Digital Studio, a Kabul-based creative-tech studio serving local and global clients.

## Stack

- Vite
- React
- Tailwind CSS
- Framer Motion
- Lucide React icons
- GitHub Pages deployment

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The repository includes `.github/workflows/deploy.yml`, which builds the Vite app and deploys the `dist` folder to GitHub Pages on every push to `main`.

The Vite `base` option is set to `./` so the static assets work both on the default GitHub Pages project URL and on the custom domain.

## Custom Domain

The `public/CNAME` file contains:

```txt
naqsh.dev
```

After DNS is pointed to GitHub Pages, GitHub will serve the site from `https://naqsh.dev/`.

Typical DNS records for an apex domain are GitHub Pages `A` records plus an optional `www` CNAME. Confirm the current values in GitHub's Pages documentation before changing DNS.
