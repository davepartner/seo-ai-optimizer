// Before/after comparison for SEO ranking snapshots (e.g. from Google Search Console).
// before/after = { clicks, impressions, ctr, position }
// Note: GSC "position" is an average, not a literal per-query rank — treat it as directional.

const n = (v) => Number(v) || 0;

export function compareSnapshots(before = {}, after = {}) {
  const clicks = n(after.clicks) - n(before.clicks);
  const impressions = n(after.impressions) - n(before.impressions);
  const ctrPp = n(after.ctr) - n(before.ctr); // percentage points
  const position = n(after.position) - n(before.position); // negative = improved (lower is better)
  return {
    clicks,
    impressions,
    ctrPp,
    position,
    positionImproved: position < 0,
    improved: position < 0 || clicks > 0 || impressions > 0,
  };
}

/** Percent change from before → after (one decimal). */
export function relativeChange(before, after) {
  const b = n(before);
  const a = n(after);
  if (b === 0) return a === 0 ? 0 : 100;
  return Math.round(((a - b) / b) * 1000) / 10;
}

/** Human-readable summary lines for the admin page. */
export function summarizeComparison(before = {}, after = {}) {
  const d = compareSnapshots(before, after);
  return [
    `Clicks: ${before.clicks ?? 0} → ${after.clicks ?? 0} (${d.clicks >= 0 ? '+' : ''}${d.clicks})`,
    `Impressions: ${before.impressions ?? 0} → ${after.impressions ?? 0} (${d.impressions >= 0 ? '+' : ''}${d.impressions})`,
    `CTR: ${before.ctr ?? 0}% → ${after.ctr ?? 0}% (${d.ctrPp >= 0 ? '+' : ''}${d.ctrPp.toFixed(1)} pp)`,
    `Avg position: ${before.position ?? 0} → ${after.position ?? 0} (${d.position <= 0 ? 'improved' : 'worse'})`,
  ];
}
