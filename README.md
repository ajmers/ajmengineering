# AJM Engineering — website

Static one-page site for Anne Maiale's consulting practice. No build step, no framework.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | All page content |
| `styles.css` | Styling (minimal/bold; light + dark via `prefers-color-scheme`) |
| `script.js` | Mobile nav, sticky-header border, scroll reveal, footer year |
| `favicon.svg` | Tab icon (AJM monogram) |
| `assets/Anne-Maiale-CV.pdf` | Downloadable CV, linked from the About section |

## Editing

- **Contact email** — `anne@ajmengineering.com`, in the `#contact` section of `index.html`
  (both the `mailto:` href and the visible button text). This mailbox must be created with
  your email provider for mail to actually arrive.
- **Domain** — `ajmengineering.com`, referenced in the `<link rel="canonical">` and the
  `og:url` / `og:title` meta tags in `index.html`.
- **Availability** — the "booking for Q4 2026" line lives in the `#availability` section.
- **Updating the CV** — drop a new PDF at `assets/Anne-Maiale-CV.pdf` (keep the name).

## Local preview

Open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 4000
# then visit http://localhost:4000
```

## Deploying

Any static host works. For Vercel:

```sh
npx vercel        # preview
npx vercel --prod # production, then add your domain in the dashboard
```

No configuration file is needed — Vercel serves this directory as-is.
