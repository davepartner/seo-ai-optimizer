# Admin UI — the "SEO & AI" page

A page in the app's admin where the admin works through everything and watches the numbers move. Build
it native to the app's design system (apply the UI/UX laws skill if available).

## Layout

```
SEO & AI
────────────────────────────────────────────────────────────
Overall: 42% complete · weighted 38%   [Baseline captured ✓]
Top 5 next actions ▸ (highest impact, unchecked)
────────────────────────────────────────────────────────────
Tabs: Checklist · Submissions · Code findings · Ranking
```

### Tab 1 — Checklist (the main page)

- **Sections**: Technical · Content & E-E-A-T · AI Discovery · Submissions · Measurement.
- Each item: a **checkbox**, the title, **why it matters**, and **how** (with a link). Collapse "why/how"
  by default so the list stays scannable.
- **Progress bars** per section + overall (percent).
- **Weighted score** (high-impact items count more).
- **Next actions**: the highest-impact unchecked items, front and centre.
- Persist checked state (per admin/tenant) and show who/when.

### Tab 2 — Submissions

- Step-by-step for **Google Search Console, Bing/IndexNow, Google Business Profile, ChatGPT Apps, MCP**
  with links and a status (**Not started / Submitted / Verified / Live**).
- A "how to submit" expandable per item (from `references/submissions.md`).

### Tab 3 — Code findings (source audit)

- The findings from scanning the repo: **issue, file/line, fix, impact, effort**.
- Each row maps to a checklist item where possible (checking it off updates the checklist).
- Sort by impact ÷ effort.

### Tab 4 — Ranking (before / after)

- **Baseline** (captured before changes) and **current** GSC metrics: impressions, clicks, CTR, average
  position.
- A **chart** (time series or before/after bars) and the deltas (`examples/ranking.mjs`).
- State the date range and the caveat that average position is an average, not a literal per-query rank.

## Data

- Checklist data: `examples/seo-checklist.json` (sections + items; `id`, `title`, `why`, `how`, `link`,
  `weight`).
- Progress: `examples/checklist.mjs` (`summarize`, `weightedScore`, `nextActions`).
- Ranking: `examples/ranking.mjs` (`compareSnapshots`, `summarizeComparison`).

## Design & states

- Empty/loading/error states; skeletons for the chart.
- Accessible: labelled checkboxes, keyboard-navigable tabs, `aria-live` on progress.
- Calm layout: ≤4 tabs, one primary action per view, details collapsed.
- Mobile: sections collapse to accordions.

## What "done" looks like

The admin can open one page, see exactly what's left (and why it matters), submit where needed, read the
code-level fixes, and see whether Google impressions/clicks/position moved after the work.
