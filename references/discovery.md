# Discovery — scan the platform & source code

Before changing anything, map what the site has and what it's missing. You can't rank what you can't see.

## Inventory

- **Stack & rendering** — framework, SSR/SSG/CSR, any prerender step.
- **Pages/routes** — list pages, their purpose, and which are indexable.
- **Metadata** — per page: `<title>`, meta description, canonical, robots meta, hreflang, Open Graph.
- **Crawling files** — `/robots.txt`, `/sitemap.xml` (and any sitemap index).
- **Structured data** — existing JSON-LD (Organization, Article, Product, FAQ…).
- **Content** — headings, internal links, images (alt), FAQ, author/about pages.
- **Speed** — Core Web Vitals, image formats/sizes, JS bundle.
- **Existing webmaster setups** — GSC / Bing verification, analytics.
- **AI artifacts** — `/llms.txt`, MCP server, any ChatGPT app.
- **Platform type** — marketing site, e-commerce, SaaS, local business, mobile app.

## How to scan the source

- Read `routes`, page/controller files, and the **head/template** components (where title/meta live).
- Look for a **sitemap generator** and **robots** file; check `public/`, `static/`, `config/`.
- Grep for `canonical`, `noindex`, `hreflang`, `application/ld+json`, `og:`, `twitter:`.
- Check how pages render (server HTML vs client-only).
- Find existing verification files/metatags (GSC/Bing) and analytics.

## Output — the SEO inventory

```
Stack:    Next.js (SSR) + CMS; images unoptimized.
Pages:    /, /blog/[slug], /products/[id], /pricing, /about, /contact.
Metadata: titles present but duplicated; no meta descriptions on blog; no canonical.
Crawl:    robots.txt missing; sitemap generated but not submitted.
Schema:   Organization only; no Article/Product/FAQ.
Speed:    LCP 4.1s (hero JPEG), CLS 0.18 (no image dimensions).
AI:       no llms.txt; robots blocks nothing; no MCP app.
Webmaster: GSC not verified.
```

Keep it factual; this drives the audit and the admin checklist.
