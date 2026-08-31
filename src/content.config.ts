import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const blogEssays = defineCollection({
    loader: glob({ base: './src/content/writings/essays', pattern: '**/*.{md,mdx}'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date().optional(),
        updatedDate: z.coerce.date().optional(),
    }),
});

const blogInfluences = defineCollection({
    loader: glob({ base: './src/content/writings/influences', pattern: '**/*.{md,mdx}'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date().optional(),
        updatedDate: z.coerce.date().optional(),
    }),
});

const blogLogs = defineCollection({
    loader: glob({ base: './src/content/writings/logs', pattern: '**/*.{md,mdx}'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date().optional(),
        updatedDate: z.coerce.date().optional(),
    }),
});

const blogRecs = defineCollection({
    loader: glob({ base: './src/content/writings/recs', pattern: '**/*.{md,mdx}'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date().optional(),
        updatedDate: z.coerce.date().optional(),
    }),
});

export const collections = { blogEssays, blogInfluences, blogLogs, blogRecs };