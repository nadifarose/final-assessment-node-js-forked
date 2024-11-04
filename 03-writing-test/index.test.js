import { test, assert } from 'node:test'; // Use assert instead of expect
import { sum } from './index.js'; // Mengimpor fungsi sum dari index.js

test('uji fungsi sum', (t) => {
  // Menguji penjumlahan dua bilangan positif
  assert.equal(sum(1, 2), 3); // Changed expect to assert.equal

  // Menguji penjumlahan dua bilangan negatif
  assert.equal(sum(-1, -1), -2);

  // Menguji penjumlahan bilangan positif dan negatif
  assert.equal(sum(1, -1), 0);

  // Menguji penjumlahan bilangan dengan nol
  assert.equal(sum(0, 5), 5);
  assert.equal(sum(5, 0), 5);
});
