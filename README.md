# Sal’s Tire Shop

A plain HTML, CSS, and JavaScript site. The editable website is directly in this project root:

- `index.html` — page content, services, hours, telephone links, and structured business data.
- `styles.css` — typography, colors, desktop and mobile layouts.
- `app.js` — progressive enhancement for the photo strip and accessible photo dialog.
- `assets/` — self-hosted fonts, original photo conversions, optimized WebP photos, and hero imagery.

Open `index.html` directly or use any static server, including VS Code Live Server. `npm run dev` serves the root on http://127.0.0.1:4173. No framework, installation, or build is needed to work on the website. `npm run build` copies deployable files into `dist/`; the root files remain the source of truth. `.openai/hosting.json` records the private Sites preview identity.

## Confirmed business details

Name: Sal’s Tire Shop. Address: 631 Wethersfield Avenue, Hartford, CT. Phone: (860) 713-8348. Hours: 8 AM–6 PM every day, confirmed by the owner of this project in the conversation. Service prices transcribed from the supplied IMG_2011 photograph: tires $35, plugs $10, wheel balancing $10, mounting & balancing $20, tire rotation $30, rim inner cleaning $20, regular valve $10, tire pressure sensor valve $20. The page asks customers to confirm tire availability and their total by phone.

## Design and assets

Layout reference: the local `../Blue-hills-cafe` project, specifically its framed hero, location-and-hours block, editorial rows, and photography. The Sal’s project directory was empty before implementation; no existing Sal’s routes or integrations were replaced.

All ten supplied IMG_2011–IMG_2020 photos appear on the page. HEIC originals remain untouched in Downloads. JPEG review conversions are retained in assets/photos; WebP versions normalize camera orientation and are used on the website. Layout crops use CSS object-fit. The real shop photographs were not generatively changed.

Typography: Barlow Regular and Semibold with Barlow Condensed Bold headings. Research considered road-sign legibility and compatibility with the shop’s tall, bold signage. Barlow’s designer describes the family’s inspiration in California license plates and highway signs: https://github.com/jpt/barlow and https://tribby.com/fonts/barlow/. Fonts are self-hosted; the SIL Open Font License is included at `assets/fonts/OFL.txt`.

The hero is an AI-generated photographic illustration based on the supplied tire reference images, made with the built-in imagegen tool. It is decorative, not a claim about specific in-stock products. Final master: `assets/hero-tires.png`; web version: `assets/hero-tires.webp`. Exact generation prompt: `assets/hero-prompt.txt`.

## Verification

JavaScript syntax, local HTTP assets, in-page anchor targets, consistent telephone links, all ten supplied photos, image alternate text, service/hour row counts, and absence of CSS gradients checked. Desktop hero visually reviewed in Chrome. Camera orientation corrected after browser inspection. The updated logo and header were visually checked in Chrome at 1440px desktop and 375px mobile widths. Full mobile-page and photo-dialog interaction QA remains unverified.

## Supplied logo

The exact logo from Desktop/18EFD745-F9C9-4F2E-AEF2-01409A870802.PNG is retained in `assets/sal-tire-shop-logo-original.png`. Header and footer use a pixel-preserving lossless WebP copy, `assets/sal-tire-shop-logo.webp`. CSS hides the empty image margins without changing the artwork. Website brand colors sampled from the logo: green `#035E34`, red `#B51A23`, near-black `#080909`, with white as the main background. The favicon uses the three-stripe brand motif.
