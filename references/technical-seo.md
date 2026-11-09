# Technical SEO

Crawlable, indexable, fast, correct. Fix these before content tactics.

## Crawlability & indexability

- **robots.txt** at the root; allow public pages; disallow `/admin`, `/cart`, search/filter params,
  and private areas. Reference the sitemap.
- **XML sitemap** (or sitemap index) of indexable URLs with `lastmod`; submit it.
- **Status codes:** indexable pages return **200**; missing pages return **404**; don't soft-404.
- **No accidental `noindex`/`nofollow`** on pages you want ranked.
- **Canonicals:** every indexable page points to itself; consolidate duplicates.
- **Redirects:** one **301** hop for moved URLs; no chains or loops.
- **URLs:** consistent case/trailing slash; readable; no session IDs.
- **Crawl budget:** avoid infinite facets/filter combos; `noindex` thin parameter pages.

## Rendering

- **Server-render or prerender** primary content. Crawlers may not execute heavy client JS. Use SSR/SSG
  or a prerender step; keep the main text and links in the HTML.
- Avoid client-only content that never renders without JS.

## Speed (Core Web Vitals, p75)

- **LCP ≤ 2.5s**, **INP ≤ 200ms**, **CLS ≤ 0.1** (see the platform-speed-optimizer skill for depth).
- Optimize the LCP image (AVIF/WebP, preload, `fetchpriority`), fonts (WOFF2, swap), JS (split, defer).

## Structured data (JSON-LD)

- `Organization` + `WebSite` on the home page.
- `BreadcrumbList` on deep pages.
- `Article`/`BlogPosting` for articles, `Product` for products, `FAQPage` for FAQs, `HowTo`,
  `LocalBusiness` for local, `Review`/`AggregateRating` where honest.

## Mobile & international

- **Mobile-first**: responsive, tappable, no horizontal scroll (Google indexes mobile).
- **hreflang**: reciprocal per locale + `x-default` for multi-language sites.
- Keep one canonical per language/region combination.

## Audit checklist

- [ ] robots.txt valid + sitemap referenced
- [ ] sitemap of indexable URLs, submitted
- [ ] 200s on key pages; no accidental noindex
- [ ] self-canonicals; duplicates consolidated
- [ ] single-hop 301s
- [ ] SSR/prerender for primary content
- [ ] CWV in the good range
- [ ] JSON-LD on key page types
- [ ] hreflang if multi-language
- [ ] no soft-404s
