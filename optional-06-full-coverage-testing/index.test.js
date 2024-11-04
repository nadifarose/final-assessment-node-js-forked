import { test, expect } from 'node:test';
import sum from './index.js'; // Import the sum function

test('sum should return 0 for non-number inputs', (t) => {
  expect(sum('a', 2)).toBe(0); // First argument is a string
  expect(sum(1, 'b')).toBe(0); // Second argument is a string
  expect(sum('a', 'b')).toBe(0); // Both arguments are strings
});

test('sum should return 0 for negative inputs', (t) => {
  expect(sum(-1, 2)).toBe(0); // First argument is negative
  expect(sum(1, -2)).toBe(0); // Second argument is negative
  expect(sum(-1, -2)).toBe(0); // Both arguments are negative
});

test('sum should return the correct sum for positive numbers', (t) => {
  expect(sum(1, 2)).toBe(3); // Simple positive case
  expect(sum(0, 0)).toBe(0); // Edge case: sum of two zeros
  expect(sum(10, 20)).toBe(30); // Larger numbers
});

test('sum should return 0 for invalid inputs', (t) => {
  expect(sum()).toBe(0); // No arguments
  expect(sum(undefined, 2)).toBe(0); // Undefined first argument
  expect(sum(1, undefined)).toBe(0); // Undefined second argument
});
