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

GitHub Pages cannot receive form submissions, so the contact form posts directly to [FormSubmit](https://formsubmit.co/). FormSubmit requires no paid backend or account. Set `PUBLIC_FORMSUBMIT_RECIPIENT` to the email address where inquiries should arrive. Locally, copy `.env.example` to `.env` and fill it in. On GitHub, add a repository **variable** named `PUBLIC_FORMSUBMIT_RECIPIENT` under **Settings → Secrets and variables → Actions → Variables**, then run the **Deploy to GitHub Pages** workflow again. The value is visible in the generated HTML; after your first confirmed submission, you can replace the email with the random alias FormSubmit emails you.

The first submission triggers a confirmation email from FormSubmit. Open that email and confirm the address before relying on the form. Submit a second real test and check your inbox and spam folder. FormSubmit handles the confirmation and CAPTCHA on its own pages; the site uses an ordinary HTML POST and a hidden `_honey` spam field. Until a recipient is configured, the submit button is disabled. See `DEPLOYMENT.md` for hosting and domain setup.

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and deploys `dist/` through GitHub Pages. `astro.config.mjs` uses `https://www.sightshock.com` as the canonical site URL. Site assets use relative paths so the temporary GitHub Pages project URL works before the custom domain is connected. The repository remote is `https://github.com/conradmann/sightshock-website.git`.
