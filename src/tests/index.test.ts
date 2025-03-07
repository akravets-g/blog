import { expect, test } from 'vitest';
import { getCollection } from 'astro:content';
import { getComments } from '../lib/comment';
import { getPopularity } from '../lib/popularity';

test('check welcome message', () => {
  const welcomeMessage = "Welcome to my blog!";
  expect(welcomeMessage).toBe("Welcome to my blog!");
});

test('check posts titles', async () => {
    const allPosts = await getCollection('post');
    expect(allPosts.length).toBeGreaterThan(0);
    allPosts.forEach((post) => {
        expect(post.data.title).toBeDefined();
    });
});

test('check comments section', async () => {
    const comments = await getComments();
    expect(comments.length).toBeGreaterThanOrEqual(0);
    comments.forEach((comment) => {
        expect(comment.text).toBeDefined();
    });
});

test('check popularity section', async () => {
    const popularity = await getPopularity();
    expect(popularity).toBeDefined();
    expect(Object.keys(popularity).length).toBeGreaterThan(0);
});
