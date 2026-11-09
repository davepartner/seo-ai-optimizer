// Helpers for the SEO & AI checklist: progress, weighted score, next actions.
// Zero deps. Pure functions — easy to test and reuse in the admin page.

export function flatten(checklist) {
  const items = [];
  for (const section of checklist.sections ?? []) {
    for (const item of section.items ?? []) {
      items.push({ ...item, sectionId: section.id, sectionTitle: section.title });
    }
  }
  return items;
}

/** Per-section and overall completion from a list of checked item ids. */
export function summarize(checklist, checked = []) {
  const done = new Set(checked);
  const sections = (checklist.sections ?? []).map((section) => {
    const items = section.items ?? [];
    const total = items.length;
    const completed = items.filter((i) => done.has(i.id)).length;
    return {
      id: section.id,
      title: section.title,
      total,
      done: completed,
      percent: total ? Math.round((completed / total) * 100) : 0,
    };
  });
  const total = sections.reduce((t, s) => t + s.total, 0);
  const completed = sections.reduce((t, s) => t + s.done, 0);
  return { sections, total, done: completed, percent: total ? Math.round((completed / total) * 100) : 0 };
}

/** Weighted completion (0–100) — prioritises high-impact items. */
export function weightedScore(checklist, checked = []) {
  const done = new Set(checked);
  const items = flatten(checklist);
  const totalWeight = items.reduce((t, i) => t + (i.weight ?? 1), 0);
  const doneWeight = items
    .filter((i) => done.has(i.id))
    .reduce((t, i) => t + (i.weight ?? 1), 0);
  return totalWeight ? Math.round((doneWeight / totalWeight) * 100) : 0;
}

/** The next unchecked items, highest impact first. */
export function nextActions(checklist, checked = [], limit = 5) {
  const done = new Set(checked);
  return flatten(checklist)
    .filter((i) => !done.has(i.id))
    .sort((a, b) => (b.weight ?? 1) - (a.weight ?? 1) || String(a.title).localeCompare(String(b.title)))
    .slice(0, Math.max(0, limit));
}
