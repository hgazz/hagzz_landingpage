# Qatar academy grant — public marketing page

- Production source: [`qatar-grant.html`](../../../qatar-grant.html).
- [Downloadable standalone HTML preview](Hagzz-Qatar-Grant-Preview.html): includes local fonts, images, styles and scripts; requires no build or external assets to view.
- Public path after website deployment: `/qatar-grant.html?lang=ar` or `?lang=en`.
- Added a campaign link to the pricing hero and an entry in the sitemap.

The page is a public marketing presentation, not an operating manual. It includes no product screenshots, dashboard images, proprietary screen flows or customer records. The interactive graphic is a generic conceptual illustration and is labeled accordingly. The existing detailed PDFs in the academy repository are independent, previously published materials; this page does not restrict or remove them.

## Brand and claims

The owner supplied the company identity, QSTP incubation status, providers and contact +974 7054 2458. Incubation is stated as incubation—not an invented claim that QSTP funds, endorses or issues the grant. Discounts and complimentary months are described without inventing a percentage or period; the written academy offer determines the scope. Provider availability remains subject to activation, terms and eligibility.

QSTP, SkipCash and Geidea logo assets were sourced as listed below and visually checked against the supplied references. Original downloadable Mesk | vlabAi and Qatar PayLater logo files were unavailable in the execution workspace; their names are temporarily rendered as text, rather than inventing or regenerating logo artwork. Replace these text marks with the approved original image assets once the owner supplies a direct source/file. Do not substitute an unrelated PayLater brand.

## Assets and attribution

- QSTP reference PNG: https://raw.githubusercontent.com/Mpekvoup/g2mqatar_new/main/public/images/partners/qatar_science.png . Matches the supplied QSTP/Qatar Foundation lockup; its original official host is blocked from the build environment.
- SkipCash SVG: https://raw.githubusercontent.com/ottuco/docs/master/static/img/gateways/skipcash.svg . Provider documentation asset; logo rights remain with the brand.
- Geidea SVG: https://raw.githubusercontent.com/ottuco/docs/master/static/img/gateways/geidea.svg . Provider documentation asset; logo rights remain with the brand.
- Cairo variable font: Google Fonts `ofl/cairo/Cairo[slnt,wght].ttf`, converted to WOFF without glyph edits. The SIL Open Font License is included in `content/assets/qatar-grant/fonts/`. The typeface and Hagzz lime/navy palette match the existing pricing site; no CDN request is needed.
- Stadium 974, Doha: historical photograph by **Ben Koorengevel / Unsplash**, https://unsplash.com/photos/aerial-view-of-city-buildings-during-daytime-CVg55UB571Y . Original copy/provenance documented in `hagzz_academy/docs/manuals/academy-qatar/en/PHOTO-CREDITS.md`. Optimised as WebP. This is sporting context, not a claim that the stadium is a client or partner.

## Local verification and regeneration

Serve the repository over HTTP (for example `python3 -m http.server 8037`). The page has no backend, signup form, tracking service or automatic message sending. WhatsApp links open a language-appropriate draft for the visitor. Language selection uses the site's existing `content/js/lang.js` and `hagzz-lang` preference; `?lang=ar|en` selects the initial language. Clipboard access has an accessible fallback.

`python3 docs/campaigns/qatar-grant/build-page.py` regenerates the page. `build-preview.py` rebuilds the standalone preview after changes. No package installation or application migration is required.

Browser validation: Arabic/English at 320, 390, 768 and 1440 pixels; no horizontal overflow, missing images or page errors. Checked the local Cairo font, language toggle/persistence, focus buttons, FAQ, and copy-link action. All external requests blocked during the main page checks to ensure the page is self-contained. Reduced-motion and keyboard-focus styles are present. See `verification.json` and the screenshots.

Repository upload and server deployment are distinct. No SSH deployment was performed in this task.
