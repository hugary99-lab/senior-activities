import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const dataset = JSON.parse(readFileSync(new URL('../data/richmond-hill-55plus-source-2026-10-24.json', import.meta.url), 'utf8'));
const asOf = '2026-10-26';

test('source events have distinct registration codes and future dates', () => {
  const codes = dataset.records.map(r => r.registration_code);
  assert.equal(new Set(codes).size, codes.length);
  for (const row of dataset.records) assert.ok(row.date > asOf, row.id + ' is not a future event');
});
test('source listing is not counted as confirmed capacity', () => {
  assert.equal(dataset.joinable_count, dataset.records.filter(r => r.confirmed_joinable).length);
  for (const row of dataset.records) {
    if (row.capacity === 'unverified') assert.equal(row.confirmed_joinable, false, row.id);
  }
});
test('caregiver fit does not silently infer mobility or transport access', () => {
  for (const row of dataset.records) {
    assert.ok(row.caregiver_match);
    assert.ok(row.caregiver_match.mobility_accessibility);
    assert.ok(row.caregiver_match.transportation_access);
    assert.ok(row.caregiver_match.caregiver_attendance);
    assert.equal(row.caregiver_match.confirmed_joinable, false);
  }
});
test('conflicting member versus nonmember pricing is flagged', () => {
  const bingo = dataset.records.find(r => r.id === 'RH-150936');
  assert.ok(bingo?.eligibility_conflict);
  assert.equal(bingo.confirmed_joinable, false);
});
