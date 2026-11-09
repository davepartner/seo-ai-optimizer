# Example SEO & AI Audit — "Acme Notes" (SaaS)

A filled example of `references/report-template.md`.

## 1. Summary

- Checklist completion: **42%** (weighted 38%).
- Baseline captured: yes — GSC, 28 days (2026-09-25 → 2026-10-22).
- Top 5 next actions: sitemap submitted, canonical tags, unique titles, hero image LCP, Organization JSON-LD.

## 2. Platform map

```
Stack: Next.js (SSR) + CMS; images unoptimized.
Pages: /, /blog/[slug], /pricing, /about, /contact, /app (auth).
Metadata: titles duplicated across blog; no meta descriptions on blog; no canonical.
Crawl: robots.txt present but blocks /blog; sitemap generated, not submitted.
Schema: Organization only; no Article/FAQ.
Speed: LCP 4.1s (hero JPEG), CLS 0.18 (no image dimensions).
AI: no llms.txt; robots allows all crawlers; no MCP app.
Webmaster: GSC not verified; Bing not verified.
```

## 3. Checklist status

| Section | Done | Total | % |
|---------|------|-------|---|
| Technical | 4 | 16 | 25% |
| Content & E-E-A-T | 3 | 11 | 27% |
| AI Discovery | 1 | 8 | 13% |
| Submissions | 1 | 7 | 14% |
| Measurement | 1 | 5 | 20% |

## 4. Code findings

| ID | Area | Issue | File | Fix | Impact | Effort |
|----|------|-------|------|-----|--------|--------|
| SEO-01 | technical | robots blocks `/blog` | `public/robots.txt` | allow `/blog`, keep admin blocked | high | S |
| SEO-02 | technical | no canonical | `app/blog/[slug]/page.tsx` | add self-canonical | high | S |
| SEO-03 | content | duplicate `<title>` | `app/layout.tsx` | per-page titles | high | M |
| SEO-04 | technical | hero 1.2MB JPEG, lazy | `components/Hero.tsx` | AVIF + preload + fetchpriority | high | S |
| SEO-05 | ai | no Organization/WebSite JSON-LD | `app/layout.tsx` | add JSON-LD + sameAs | med | S |
| SEO-06 | content | no meta descriptions | blog template | 150–160 chars each | med | M |

## 5. Submissions

| Destination | Status | Notes |
|-------------|--------|-------|
| Google Search Console | Submitted | DNS verified; sitemap pending |
| Bing / IndexNow | Not started | import from GSC |
| ChatGPT Apps | n/a | no action app |
| MCP directory | n/a | — |

## 6. Ranking (before / after)

| Metric | Before (28d) | After (28d) | Delta |
|--------|--------------|-------------|-------|
| Clicks | 1,240 | 1,690 | +450 |
| Impressions | 38,000 | 52,400 | +14,400 |
| CTR | 3.3% | 3.2% | −0.1 pp |
| Avg position | 18.4 | 12.1 | improved |

*Average position is an average, not a literal per-query rank.*

## 7. AI visibility

- Asked ChatGPT/Perplexity "how do I take notes offline?" — brand not cited yet; the blog page that
  answers it ranks #14, needs internal links + FAQ schema.

## 8. Safety notes

URLs/canonicals/redirects preserved; nothing de-indexed; changes behind a deploy, reversible; baseline
captured before edits.
