import { expect, test } from 'vitest';
import { getComments, addComment } from '../lib/comment';

test('getComments', () => {
  const comments = getComments();
  expect(Array.isArray(comments)).toBe(true);
});

test('addComment', () => {
    const initialComments = getComments();
    addComment({ text: 'test' });
    const finalComments = getComments();
    expect(finalComments.length).toBe(initialComments.length + 1);
});
