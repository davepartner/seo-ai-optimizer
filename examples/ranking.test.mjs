import test from 'node:test';
import assert from 'node:assert/strict';
import { compareSnapshots, relativeChange, summarizeComparison } from './ranking.mjs';

test('compareSnapshots computes deltas', () => {
  const d = compareSnapshots(
    { clicks: 100, impressions: 2000, ctr: 5, position: 12 },
    { clicks: 150, impressions: 2600, ctr: 5.8, position: 8 },
  );
  assert.equal(d.clicks, 50);
  assert.equal(d.impressions, 600);
  assert.equal(Math.round(d.ctrPp * 10) / 10, 0.8);
  assert.equal(d.position, -4);
  assert.equal(d.positionImproved, true);
});

test('a worse position is not "improved"', () => {
  const d = compareSnapshots({ position: 8 }, { position: 12 });
  assert.equal(d.positionImproved, false);
});

test('relativeChange handles a zero baseline', () => {
  assert.equal(relativeChange(0, 0), 0);
  assert.equal(relativeChange(0, 10), 100);
  assert.equal(relativeChange(100, 150), 50);
});

test('summarizeComparison returns readable lines', () => {
  const lines = summarizeComparison(
    { clicks: 10, impressions: 100, ctr: 10, position: 10 },
    { clicks: 20, impressions: 200, ctr: 12, position: 7 },
  );
  assert.equal(lines.length, 4);
  assert.match(lines[0], /Clicks: 10 → 20/);
  assert.match(lines[3], /improved/);
});
