# SightShock website

A static, single-page IT consulting site built with Astro, TypeScript, Tailwind CSS, and GSAP ScrollTrigger. The page is prerendered for GitHub Pages. Scroll animation is loaded only when the services section approaches the viewport; content and navigation remain usable without it.

## Develop locally

Requires Node.js 22 or later.

```sh
npm install
npm run dev
```

Open the local URL printed by Astro. To verify the production output:

```sh
npm run build
npm run preview
```

## Edit content

- `src/data/site.ts`: site identity, metadata, hero, positioning, business topics, about, contact text, navigation and capability ticker.
- `src/data/services.ts`: services, challenge statements and process steps.
- `src/data/caseStudies.ts`: anonymized work cards. Replace outcome placeholders only with approved, accurate language.
- `src/styles/global.css`: visual system and responsive styling.
- `public/hero-background.webp`: optimized hero background. Replace this file to update the supplied image.
- `public/sightshock-logo.png`: original transparent logo artwork used in the header, About section and footer.
- `public/blue-particles-loop.mp4` and `public/blue-particles-poster.jpg`: short, silent background for the Thinking section and its still fallback. The video loads when the section enters view and stays still for reduced-motion or data-saving visitors.
- `public/business-impact.webp`: business section illustration.
- `src/components/`: navigation, infrastructure diagram, form and footer.

## Contact form

GitHub Pages cannot receive form submissions. Set `PUBLIC_CONTACT_FORM_ENDPOINT` to a full HTTPS endpoint and rebuild the site. Locally, copy `.env.example` to `.env` and fill it in. On GitHub, add the endpoint as a repository **variable** named `PUBLIC_CONTACT_FORM_ENDPOINT` under **Settings → Secrets and variables → Actions → Variables**. Trigger a new deployment after setting it. The endpoint is public in the generated HTML; do not put a secret API key in it. The form uses a spam honeypot and sends with `fetch` expecting a 2xx response and CORS support. Until configured, it reports that submission is unavailable rather than pretending a message was sent.

Provider options:

- **Formspree:** create a form, use its `https://formspree.io/f/...` endpoint. Configure allowed domains and spam protection in Formspree.
- **Basin:** create a form and use its HTTPS form endpoint. Enable AJAX/CORS submissions and spam protection in Basin.
- **Web3Forms:** their standard endpoint needs an access key posted as a form field. Add a configured `access_key` hidden field in `src/components/ContactForm.astro` and use `https://api.web3forms.com/submit`; Web3Forms access keys are intended for client-side use. Set allowed domains and spam protection in its dashboard.
- **Other static-site provider:** use a provider endpoint accepting browser `POST`/`FormData`, CORS, and an `Accept: application/json` response. Adjust the form script for any provider-specific fields or response format.

Before launch, connect a provider and send a real test submission. See `DEPLOYMENT.md` for hosting and domain setup.

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and deploys `dist/` through GitHub Pages. `astro.config.mjs` uses `https://www.sightshock.com` as the canonical site URL. Site assets use relative paths so the temporary GitHub Pages project URL works before the custom domain is connected. The repository remote is `https://github.com/conradmann/sightshock-website.git`.
