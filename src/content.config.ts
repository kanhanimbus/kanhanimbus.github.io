import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const blogWritings = defineCollection({
    loader: glob({ base: './src/content/writings', pattern: '**/*.{md,mdx}'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date().optional(),
        updatedDate: z.coerce.date().optional(),
    }),
});

const blogInfluences = defineCollection({
    loader: glob({ base: './src/content/influences', pattern: '**/*.{md,mdx}'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date().optional(),
        updatedDate: z.coerce.date().optional(),
    }),
});

const blogLogs = defineCollection({
    loader: glob({ base: './src/content/logs', pattern: '**/*.{md,mdx}'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date().optional(),
        updatedDate: z.coerce.date().optional(),
    }),
});

const blogRecs = defineCollection({
    loader: glob({ base: './src/content/recs', pattern: '**/*.{md,mdx}'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date().optional(),
        updatedDate: z.coerce.date().optional(),
    }),
});

export const collections = { blogWritings, blogInfluences, blogLogs, blogRecs };