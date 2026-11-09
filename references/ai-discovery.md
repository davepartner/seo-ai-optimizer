# AI Discovery (AEO / GEO)

Being *findable and citable* by AI answer engines — ChatGPT, Perplexity, Gemini, Claude — and getting
into AI app directories.

> **Reality check:** AI visibility is driven mostly by **crawlability, structured data, and clear,
> quotable content**. `llms.txt` is cheap to add but is **not yet widely read**; don't treat it as a
> silver bullet.

## 1. Let the right AI crawlers in

`robots.txt` user-agents fall into two groups — decide each:

- **Search/retrieval crawlers** (these produce citations): `OAI-SearchBot`, `Claude-SearchBot`,
  `PerplexityBot`, plus `Googlebot`/`Bingbot`.
- **Training crawlers** (scrape to train models): `GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`,
  `Bytespider`, etc.

Allow the search/retrieval ones if you want AI citations. Allow or block the training ones as a business
decision — and document it. Example:

```
User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: GPTBot
Allow: /        # or Disallow: / to opt out of training

Sitemap: https://example.com/sitemap.xml
```

(Verify the current user-agent tokens before shipping — providers change them.)

## 2. llms.txt (cheap, not guaranteed)

A markdown index of your key pages for LLMs:

```
# Example.com
> A one-line description of the site.

## Key pages
- [Docs](https://example.com/docs): what it covers
- [Pricing](https://example.com/pricing): plans and pricing
- [Blog](https://example.com/blog): guides and updates
```

Also serve `/llms-full.txt` with fuller content if useful. Add it, but **don't rely on it alone**.

## 3. Machine-readable facts

- `Organization`/`WebSite` JSON-LD: name, url, logo, `sameAs` (social), contact.
- Clear **entity** info: who you are, what you do, where.
- `Article`/`Product`/`FAQPage`/`HowTo` where relevant.

## 4. Be quotable

- Lead with the answer; keep sentences crisp and factual.
- Use definitions, numbered steps, tables, and dates.
- Cite sources; avoid hype and unverifiable claims.
- Keep one idea per section so an answer engine can extract a clean quote.

## 5. Get into AI app directories

- **ChatGPT Apps** — build an **MCP server** with the **Apps SDK**, then submit via the plugin/app
  submission portal (OAuth + domain verification + guidelines). See `submissions.md`.
- **MCP registries** — publish your server metadata and list it.
- **Other AI directories** — submit to relevant tool/assistant listings.

## 6. Monitor citations

- Periodically ask ChatGPT / Perplexity / Gemini your key questions.
- Note whether your brand is mentioned/cited and which URL is used.
- Improve the pages that get cited (and create ones that should be).

## Checklist

- [ ] allow AI search/retrieval crawlers
- [ ] decide + document training-crawler policy
- [ ] publish llms.txt (low priority, cheap)
- [ ] Organization/WebSite JSON-LD + entity clarity
- [ ] quotable, sourced content
- [ ] ChatGPT Apps / MCP submitted if relevant
- [ ] monitor AI citations monthly
