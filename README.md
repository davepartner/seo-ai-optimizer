# SEO & AI Optimizer

Your site isn't ranking, and now it also has to show up when people ask ChatGPT, Perplexity, or Gemini a question. You don't want to guess what to fix or where to submit.

This is an AI agent skill that handles both. Point your agent at your project and it audits the whole site and codebase, builds an **"SEO & AI" page in your admin** with a checklist you tick off, tells you **exactly where and how to submit**, and tracks your **Google ranking before and after**.

It's not tied to any stack. It reads whatever you built and works in that stack.

You can read the full instructions in [`SKILL.md`](./SKILL.md).

---

## Use it

Copy this into Claude Code, Cursor, Codex, OpenCode, or whichever agent you use:

```
Pull the seo-ai-optimizer skill from
https://github.com/davepartner/seo-ai-optimizer, read SKILL.md, and optimize this project for Google and AI search.

1. Scan the whole platform and codebase: pages, routes, templates/head, rendering, sitemap/robots, structured data, and any existing SEO setup.
2. Audit it against the checklist and give me a prioritized list of fixes (code-level + content + AI discovery), with file, fix, impact, and effort.
3. Build an "SEO & AI" page in the admin: checkable items in sections, progress, step-by-step submission instructions (Google Search Console, Bing/IndexNow, ChatGPT Apps, MCP), the code findings, and the ranking chart.
4. Capture the Google Search Console baseline (impressions, clicks, CTR, average position) so we can compare before/after.
5. Wait for my approval before changing code. Then implement the safe wins without breaking URLs, canonicals, redirects, or the UI. Re-measure after.
```

That's the whole loop. The skill does the rest.

---

## What it does

1. **Scans** the platform and source code — routes, templates, metadata, rendering, crawl files, schema, speed, AI artifacts.
2. **Audits** against a checklist split into **Technical · Content & E-E-A-T · AI Discovery · Submissions · Measurement**.
3. **Builds the admin page** — sections of checkable items, progress bars, a weighted score, and "next actions".
4. **Guides submissions** — Google Search Console, Bing/IndexNow, Google Business Profile, ChatGPT Apps, MCP directories, app stores.
5. **Finds code fixes** — an itemized list from your actual repo, mapped to checklist items.
6. **Tracks ranking** — a GSC baseline, then before/after deltas and a chart.

## What the admin page looks like

- **Checklist** — every item shows what to do, **why it matters**, and **how**; tick it off; watch progress and a weighted score.
- **Submissions** — where to submit and the steps, with a status per destination.
- **Code findings** — issue, file, fix, impact, effort — from scanning the repo.
- **Ranking** — impressions, clicks, CTR and average position, before and after.

## AI discovery — the honest version

- **Crawlability first.** In `robots.txt`, allow the AI **search/retrieval** crawlers that produce citations (`OAI-SearchBot`, `Claude-SearchBot`, `PerplexityBot`). Decide your policy on **training** crawlers (`GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`).
- **Machine-readable.** JSON-LD (`Organization`, `WebSite`, `Breadcrumb`, `Article`, `Product`, `FAQPage`) and clear entity info.
- **Quotable content.** Lead with the answer, use definitions and sources, keep it factual.
- **`llms.txt`** — add it, but don't rely on it. Many AI crawlers still read HTML directly. The skill says so instead of overselling it.
- **ChatGPT apps** — the current path is the **Apps SDK** (an MCP server) plus the **submission portal**, with OAuth and domain verification.

## Google ranking, before and after

- Capture a **Google Search Console** baseline (28-day window) **before** changes.
- Re-measure after Google recrawls.
- `examples/ranking.mjs` compares the two snapshots and the admin page charts the deltas.
- Caveat stated everywhere: GSC "average position" is an average, not a literal per-query rank — it's directional.

## Safety

- Never change or remove URLs without a **301**; keep canonicals and redirects intact.
- No cloaking, hidden text, or doorway pages.
- Additive robots/sitemap changes; test that key pages still return 200 and are indexable.
- Snapshot the baseline before editing, so the before/after is real.

## Run the tests

```bash
npm test
```

## License

MIT — see [LICENSE](./LICENSE).

---

## Search index — keywords

SEO, search engine optimization, rank on Google, Google ranking, SEO audit, technical SEO, on-page SEO,
content SEO, E-E-A-T, structured data, JSON-LD, schema.org, sitemap, robots.txt, canonical, hreflang,
Core Web Vitals, LCP, INP, CLS, crawlability, indexability, Google Search Console, GSC, impressions,
clicks, CTR, average position, Bing Webmaster, IndexNow, Google Business Profile, local SEO.

AI SEO, AEO, GEO, answer engine optimization, generative engine optimization, AI search, ChatGPT SEO,
get cited by AI, AI visibility, AI crawlers, GPTBot, ClaudeBot, OAI-SearchBot, Claude-SearchBot,
PerplexityBot, Google-Extended, CCBot, llms.txt, ChatGPT app store, ChatGPT Apps, Apps SDK, MCP,
model context protocol, AI directories, AI citations.

SEO admin dashboard, SEO checklist, admin checklist, submission guide, source code audit, before after
ranking, ranking tracker.

AI agent skill, Claude Code skill, Claude skill, Cursor rules, AI coding rules, agent prompt, system
prompt, LLM rules, agentic development, developer skill, engineering skill, growth skill, SEO skill.
