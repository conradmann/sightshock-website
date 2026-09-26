# Deploy SightShock

## 1. GitHub repository and Pages

1. Push this project's `main` branch to `https://github.com/conradmann/sightshock-website`. The repository and GitHub Pages Actions source are already configured.
2. In **Settings → Pages**, choose **GitHub Actions** as the build and deployment source.
3. In **Settings → Pages → Custom domain**, enter `www.sightshock.com` and save. With an Actions deployment, GitHub uses this setting; `public/CNAME` is included as a requested project artifact but does not replace the Pages setting.
4. Add `PUBLIC_CONTACT_FORM_ENDPOINT` as a repository Actions variable after choosing a form provider (see README). Deploy again and submit a real test message.
5. Push to `main`, check the **Deploy to GitHub Pages** workflow, and verify the displayed Pages URL. When the certificate is ready, enable **Enforce HTTPS** in Pages settings.

The Astro `site` setting and canonical/OG links assume the final `www` domain. The temporary GitHub Pages URL remains usable because visible site assets use relative paths.

## 2. GoDaddy DNS for `www.sightshock.com`

In GoDaddy DNS Management, set a **CNAME** record:

| Type | Name | Value |
| --- | --- | --- |
| CNAME | `www` | `<GITHUB-ACCOUNT>.github.io` |

Replace `<GITHUB-ACCOUNT>` with the actual GitHub user or organization that owns the repository. Do **not** include `/sightshock-website` in the value. Remove or replace a conflicting existing `www` record only after checking what it currently serves.

## 3. Redirect the apex domain

To have GitHub Pages redirect `sightshock.com` to the configured `www.sightshock.com`, point the apex (`@`) to GitHub Pages with these four **A** records:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

GitHub Pages redirects the apex to `www` when both are correctly configured and `www.sightshock.com` is the Pages custom domain. Check existing apex web records before replacing them. DNS propagation and HTTPS issuance can take time. Avoid a GoDaddy forwarding rule layered on top of these records; it can complicate HTTPS and redirect behavior.

## 4. Records to preserve

Do not remove or alter **MX**, mail-related **TXT** records (SPF, DKIM, DMARC), **SRV**, or other records used by email, identity verification, or unrelated services. Do not change nameservers. Keep any GitHub domain verification TXT record. Change only the web records needed for `www` and `@`, after reviewing current values.

## 5. Verify

```sh
dig www.sightshock.com CNAME +short
dig sightshock.com A +short
```

Then visit `https://www.sightshock.com`, `https://sightshock.com` (should redirect to `www`), `/robots.txt`, `/sitemap-index.xml`, and check the form with a real submission. GitHub's [custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) has the current DNS values and redirect behavior.
