# Awab Travel (Static)

A fully static, bilingual landing experience for Awab Travel. The site now ships as plain HTML, CSS, and JavaScript only—no Flask backend or server-rendered routes.

## Project Structure
```
.
├── assets/                # place logos/images here
├── css/
│   └── style.css          # global styles and responsive rules
├── js/
│   ├── i18n.js            # language loader (EN/AR JSON)
│   └── main.js            # interactive single-page experience for index.html
├── translations/          # static JSON dictionaries for i18n
│   ├── ar.json
│   └── en.json
├── index.html             # landing page (renders dynamic sections via JS)
├── about.html             # static "about" page
└── contact.html           # static "contact" page
```

## Running Locally (no backend required)
1. From the repo root, start any static server (modules + fetch need HTTP, not a `file://` URL):
   ```bash
   python -m http.server 8000
   ```
2. Visit `http://localhost:8000/index.html` (or `/about.html`, `/contact.html`).

## Deployment (free static hosts)
The site is ready to upload as-is to any static host.

### GitHub Pages
1. Commit & push to GitHub.
2. In **Settings → Pages**, choose the branch (e.g., `main`) and root (`/`).
3. Save; Pages will publish at `https://<user>.github.io/<repo>/`.
4. (Optional) Add a custom domain in **Pages → Custom domain**; create a CNAME record pointing to `<user>.github.io.`

### Netlify
1. Drag-and-drop the repo folder onto <https://app.netlify.com/drop> **or** connect the GitHub repo.
2. Build command: _none_; Publish directory: `/`.
3. Netlify auto-issues HTTPS. To add a custom domain: **Site configuration → Domain management → Add domain** and follow the DNS instructions (usually a CNAME to `site-name.netlify.app`).

### Vercel
1. Create a new project and import the repo.
2. Framework preset: **Other**; Output directory: `/`.
3. Deploy. For a custom domain, open the project → **Settings → Domains → Add** and point a CNAME to `<project>.vercel.app` (or A/ALIAS records if root is required). Vercel also provisions HTTPS automatically.

## Custom Domain & SSL Checklist
- Create/confirm a `CNAME` record from `www.yourdomain.com` to the host-provided URL (Netlify/Vercel/GitHub Pages).
- For apex domains (`yourdomain.com`), use ALIAS/ANAME/AL records if your DNS provider supports them.
- Wait for DNS to propagate, then verify the domain in the host dashboard. HTTPS certificates are issued automatically on Netlify/Vercel; GitHub Pages will also request one when you check **Enforce HTTPS**.

## Performance & Compatibility
- Uses a small JS bundle with intersection observers and CSS-driven animations; a polyfill from `polyfill.io` is included for older browsers.
- All assets are referenced relatively (`css/`, `js/`, `translations/`) so the site works from any static root.
- For best performance, compress any images you place in `assets/` (e.g., via Squoosh) and prefer modern formats (WebP/AVIF).
- Static hosts automatically provide caching headers; you can also add `_headers` (Netlify) or `vercel.json` rules if you want longer cache lifetimes.

## SEO
- Pages include descriptive meta tags, Open Graph/Twitter cards, and JSON-LD `TravelAgency` schema on the landing page.
- `robots.txt` allows full crawling by default; adjust if you need to block specific paths.
