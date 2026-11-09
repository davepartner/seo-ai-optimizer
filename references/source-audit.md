# Source audit — study the codebase, then list fixes

The audit reads the whole platform and turns code reality into an itemized improvement list.

## What to inspect

| Area | Look for |
|------|----------|
| **Routes/pages** | every public route; which are indexable; any generated/param pages |
| **Head/template** | `<title>`, meta description, canonical, robots meta, hreflang, OG/Twitter tags |
| **Rendering** | SSR/SSG vs client-only; does primary content exist in the HTML? |
| **Sitemap/robots** | generated? complete? referenced? noindex leaks? |
| **Structured data** | JSON-LD on Organization/WebSite/Article/Product/FAQ/Breadcrumb |
| **Images** | alt text, dimensions, formats, lazy-loading |
| **Internal links** | descriptive anchors; orphans; broken links |
| **Redirects** | 301s for moved URLs; chains/loops |
| **Performance** | LCP image, JS bundle, fonts, CWV |
| **i18n** | hreflang, locale canonicals |

## How to produce findings

1. **Map** routes/templates (same as `discovery.md`).
2. For each area, **diff against the standard** (`technical-seo.md`, `content-seo.md`).
3. Write a finding per gap:

```
id: SEO-01
area: technical
issue: Blog pages have no canonical tag
file: resources/views/blog/show.blade.php:12
fix: add <link rel="canonical" href="{{ url()->current() }}">
impact: high (weight 3)
effort: S
maps_to: canonical
```

4. **Map** each finding to a checklist item (`maps_to`) so checking it off updates the admin checklist.
5. **Sort** by impact ÷ effort; implement the safe ones first.
6. **Verify** after: re-crawl the page / re-check the tag; run the ranking comparison later.

## Guardrails

- **Don't** change URLs, canonicals, or redirects in a way that de-indexes pages.
- **Don't** add `noindex` to pages you're trying to rank.
- **Don't** inject duplicate/conflicting structured data or multiple canonicals.
- Keep changes **additive and reversible**; snapshot the GSC baseline first.

## Example findings table

| ID | Area | Issue | Fix | Impact | Effort |
|----|------|-------|-----|--------|--------|
| SEO-01 | technical | No canonical on blog | add self-canonical | high | S |
| SEO-02 | technical | Hero 1.2MB JPEG | AVIF + preload | high | S |
| SEO-03 | content | Duplicate titles | unique per page | high | M |
| SEO-04 | ai | No Organization JSON-LD | add entity + sameAs | med | S |
| SEO-05 | technical | robots blocks /blog | allow | high | S |
