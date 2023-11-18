import { defineCollection, z } from "astro:content";

const course = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  course,
};
