import { test, expect } from 'node:test';
import { sum } from './index.js'; // Mengimpor fungsi sum dari index.js

test('uji fungsi sum', (t) => {
  // Menguji penjumlahan dua bilangan positif
  expect(sum(1, 2)).toBe(3);
  
  // Menguji penjumlahan dua bilangan negatif
  expect(sum(-1, -1)).toBe(-2);
  
  // Menguji penjumlahan bilangan positif dan negatif
  expect(sum(1, -1)).toBe(0);
  
  // Menguji penjumlahan bilangan dengan nol
  expect(sum(0, 5)).toBe(5);
  expect(sum(5, 0)).toBe(5);
});
