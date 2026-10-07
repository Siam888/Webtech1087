import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { run } from '../src/run-scenario.js';

test('forma scenariului este validă și shell-ul scrie rezultatul', () => {
  const value = JSON.parse(
    readFileSync(new URL('../data/scenario.json', import.meta.url), 'utf8'),
  );

  assert.ok(Array.isArray(value.records));
  assert.equal(typeof value.rule, 'object');

  const lines = [];
  assert.equal(run({ log: (line) => lines.push(line), error: (line) => lines.push(line) }), 0);
  assert.match(lines[0], /data\/result\.json/);
});
