import assert from 'node:assert/strict';
import test from 'node:test';
import { jsonResponse, useServer } from './helpers.js';

const getBaseUrl = useServer();

test('ruta de salut bazată pe cale decodează și taie spațiile din ultimul segment', async () => {
  assert.deepEqual(await jsonResponse(await fetch(`${getBaseUrl()}/api/greetings/%20Ada%20Lovelace%20`)), {
    status: 200,
    contentType: 'application/json',
    body: { message: 'Hello, Ada Lovelace!', source: 'path' },
  });
});

test('ruta de salut bazată pe cale respinge un segment decodat gol', async () => {
  assert.deepEqual(await jsonResponse(await fetch(`${getBaseUrl()}/api/greetings/%20%20`)), {
    status: 400,
    contentType: 'application/json',
    body: { error: 'name_required' },
  });
});
