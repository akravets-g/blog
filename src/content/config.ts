import { z, defineCollection } from 'astro:content';
const postSchema = z.object({
    title: z.string(),
    description: z.string(),
});

export const collections = {
    post: defineCollection({ schema: postSchema })
};
