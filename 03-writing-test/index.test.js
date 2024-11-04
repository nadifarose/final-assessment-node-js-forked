import { test } from 'node:test'; 
import { strict as assert } from 'node:assert'; // Correctly importing assert as strict
import { sum } from './index.js'; // Importing sum function from index.js

test('uji fungsi sum', (t) => {
  // Menguji penjumlahan dua bilangan positif
  assert.equal(sum(1, 2), 3); // Assert positive sum

  // Menguji penjumlahan dua bilangan negatif
  assert.equal(sum(-1, -1), -2); // Assert negative sum

  // Menguji penjumlahan bilangan positif dan negatif
  assert.equal(sum(1, -1), 0); // Assert positive and negative sum

  // Menguji penjumlahan bilangan dengan nol
  assert.equal(sum(0, 5), 5); // Assert sum with zero
  assert.equal(sum(5, 0), 5); // Assert sum with zero
});
