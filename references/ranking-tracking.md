# Ranking tracking — before and after

Prove the work moved the numbers. Capture a **baseline before** changes, then re-measure.

## The four GSC metrics

From **Google Search Console → Performance**:

- **Clicks** — visits from Google.
- **Impressions** — times your result was shown.
- **CTR** — clicks ÷ impressions.
- **Average position** — average rank of your results (lower is better). It's an **average**, not a
  literal per-query rank.

Use a **28-day** window ending a few days before "today" (data lags 2–3 days) and note the date range.

## Getting the data

- **UI export** — Performance → Export → CSV (per query/page/country/device).
- **Search Console API** (Search Analytics `query`) — automate snapshots:

```http
POST https://searchconsole.googleapis.com/webmasters/v3/sites/{siteUrl}/searchAnalytics/query
{
  "startDate": "2026-10-01",
  "endDate": "2026-10-28",
  "dimensions": ["date"],
  "rowLimit": 1000
}
```

- **Rank tracker** (optional) — per-keyword positions for a specific list.

## Which "ranking" to show

- **Impressions / clicks / CTR / average position** are the honest, first-party signals.
- Per-keyword rank is only meaningful if you track a fixed keyword list; GSC doesn't expose a single
  "position" per keyword for you.
- **AI visibility** is separate: manually ask ChatGPT/Perplexity/Gemini your key questions and note
  citations.

## Compare before/after

Use `examples/ranking.mjs`:

```js
import { compareSnapshots, summarizeComparison, relativeChange } from './examples/ranking.mjs';
compareSnapshots(
  { clicks: 100, impressions: 2000, ctr: 5.0, position: 12.4 },
  { clicks: 150, impressions: 2600, ctr: 5.8, position: 8.1 },
);
// → { clicks: 50, impressions: 600, ctrPp: 0.8, position: -4.3, positionImproved: true, improved: true }
```

Show the deltas + a chart on the admin page.

## Caveats (state them on the page)

- **Average position is an average** across queries/pages — treat it as directional.
- **Recrawl delay** — Google may take days/weeks to reflect changes; wait, then measure.
- **Seasonality** — compare similar periods; don't blame a change for a holiday dip.
- **AI Overviews** can lower clicks even when impressions grow.
- **Attribution** — many things changed; note what shipped between snapshots.

## Cadence

- Capture baseline → implement → wait for recrawl → re-measure (28-day window) → compare → repeat monthly.
