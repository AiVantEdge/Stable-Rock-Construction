# Deploying Stable Rock to Vercel + pointing the Squarespace domain

Everything in this `deploy/` folder is the live site. Nothing else in the project needs to ship.

```
deploy/
  index.html                    /
  roofing.html                  /roofing
  plumbing.html                 /plumbing
  mechanical-hvac.html          /mechanical-hvac
  general-construction.html     /general-construction
  impact-windows-doors.html     /impact-windows-doors
  remodels.html                 /remodels
  app/        page code (React, transpiled in the browser)
  assets/     photos, videos, logo
  tokens/     brand CSS variables
  styles.css  brand stylesheet
  vercel.json clean URLs + asset caching
  robots.txt, sitemap.xml
```

Each page ships real `<title>`, meta description, canonical URL, Open Graph tags, and JSON-LD
(`LocalBusiness` + `RoofingContractor` + `GeneralContractor` on every page, plus `Service`,
`OfferCatalog`, and `BreadcrumbList` per trade, and `FAQPage` on the homepage). Text content is in the
HTML before any JavaScript runs, so crawlers and AI search see it without executing scripts.

---

## 1. Deploy to Vercel

**Option A — drag and drop (fastest)**

1. Download the `deploy` folder and unzip it.
2. Go to <https://vercel.com/new> → **Deploy** → drag the unzipped folder onto the drop zone.
3. Framework preset: **Other**. No build command, no output directory. Deploy.

**Option B — CLI**

```bash
npm i -g vercel
cd deploy
vercel --prod
```

**Option C — Git (best for ongoing edits)**

Push the contents of `deploy/` to a GitHub repo, then Vercel → **Add New → Project → Import**. Every push
to `main` redeploys automatically.

Confirm the preview URL works, including `/roofing` and `/remodels`, before touching DNS.

---

## 2. Point the Squarespace domain at Vercel

In Vercel: **Project → Settings → Domains → Add** → enter `stablerockconstruction.com`. Add `www.` too and
let Vercel redirect one to the other. Vercel will then show the exact records to create — normally:

| Type | Host / Name | Value |
| --- | --- | --- |
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

In Squarespace: **Account menu → Domains → click the domain → DNS → DNS Settings**.

1. Delete or edit the existing `A` records for `@` that point at Squarespace, and the `www` CNAME.
2. Add the two records above exactly as Vercel lists them.
3. Leave every other record alone — especially `MX` and any `TXT`/`SPF`/`DKIM` records, or company email
   stops working.
4. Save. Vercel's domain panel flips to **Valid Configuration** once DNS propagates (usually minutes, up
   to 48 hours). SSL is issued automatically.

**Heads up:** the moment DNS points to Vercel, anything currently served from Squarespace at that domain
goes dark. If a Squarespace site is live there now, deploy to Vercel and check the preview URL first, then
switch DNS.

If the domain is *registered* somewhere else and only *connected* to Squarespace, make these DNS changes at
the registrar instead.

---

## 3. After launch

- **Google Search Console** — add the property, submit `https://stablerockconstruction.com/sitemap.xml`.
- **Google Business Profile** — link the site URL; the `LocalBusiness` schema and GBP should agree on name,
  phone, and service areas.
- **License numbers** — the footer still reads `License #: [ to be added ]`. Send them and it is a one-line
  change; they also belong in the schema as `identifier`.
- **Form** — the quote form is front-end only right now. It needs a real endpoint (Vercel Form, Formspree,
  or a GHL webhook) before launch, or submissions go nowhere.
- **Analytics** — Vercel Analytics is one toggle in the project settings.

## Making changes later

Edit the source in `ui_kits/website/`, then regenerate this folder — the deploy copies differ only in asset
paths and in using real `href` links per page instead of in-app routing.
