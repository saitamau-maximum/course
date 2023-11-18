import { defineCollection, z } from "astro:content";

const course = defineCollection({
  schema: z.object({
    title: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  course,
};
