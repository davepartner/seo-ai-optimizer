import test from 'node:test';
import assert from 'node:assert/strict';
import { flatten, nextActions, summarize, weightedScore } from './checklist.mjs';

const checklist = {
  sections: [
    {
      id: 'tech',
      title: 'Technical',
      items: [
        { id: 'a', title: 'A', weight: 3 },
        { id: 'b', title: 'B', weight: 2 },
      ],
    },
    {
      id: 'ai',
      title: 'AI',
      items: [{ id: 'c', title: 'C', weight: 1 }],
    },
  ],
};

test('flatten includes section info', () => {
  const items = flatten(checklist);
  assert.equal(items.length, 3);
  assert.equal(items[0].sectionId, 'tech');
});

test('summarize counts done per section and overall', () => {
  const r = summarize(checklist, ['a', 'c']);
  assert.equal(r.total, 3);
  assert.equal(r.done, 2);
  assert.equal(r.percent, 67);
  assert.equal(r.sections[0].percent, 50);
  assert.equal(r.sections[1].percent, 100);
});

test('weightedScore weights high-impact items more', () => {
  // done a (w3) of total 6 => 50%; done c (w1) of 6 => 17%
  assert.equal(weightedScore(checklist, ['a']), 50);
  assert.equal(weightedScore(checklist, ['c']), 17);
});

test('nextActions returns unchecked, highest weight first', () => {
  const next = nextActions(checklist, ['a'], 5);
  assert.deepEqual(next.map((i) => i.id), ['b', 'c']);
});

test('empty checklist / unknown ids are safe', () => {
  assert.equal(summarize({ sections: [] }, []).percent, 0);
  assert.equal(weightedScore(checklist, ['nope']), 0);
});
