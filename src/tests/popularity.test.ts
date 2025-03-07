import { expect, test } from 'vitest';
import { getPopularity, addPopularity } from '../lib/popularity';

test('getPopularity', () => {
  const popularity = getPopularity();
  expect(typeof popularity).toBe('object');
});

test('addPopularity', () => {
    const initialPopularity = getPopularity();
    addPopularity("test");
    const finalPopularity = getPopularity();
    expect(Object.keys(finalPopularity).length).toBeGreaterThan(Object.keys(initialPopularity).length);
});
