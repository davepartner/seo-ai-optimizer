# Changelog

## [1.0.0] — 2026-11-09
- Initial release: SEO + AI discovery (AEO/GEO) optimizer skill.
  - Pipeline: Scan → Audit → Build admin page → Submit → Implement → Measure (before/after).
  - References: discovery, technical SEO, content/E-E-A-T, AI discovery (crawlers, llms.txt, ChatGPT
    Apps/MCP), submissions (GSC, Bing/IndexNow, ChatGPT, MCP), admin UI, source audit, ranking tracking,
    report template.
  - Admin "SEO & AI" page: sections of checkable items, progress + weighted score, submission guide,
    code findings, before/after ranking chart.
  - Examples: `seo-checklist.json` (structured checklist), `checklist.mjs` (progress/next actions),
    `ranking.mjs` (before/after), sample audit report, `llms.txt`, `robots.txt`, `sitemap.xml`.
  - Honest about `llms.txt` (not a silver bullet) and GSC average position (directional).
  - CI runs the checklist + ranking tests.
