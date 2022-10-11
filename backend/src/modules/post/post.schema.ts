import z from 'zod';

export const createPost = z.object({
  body: z.object({
    userId: z.number().int(),
    title: z.string({
      required_error: 'Cannot be empty',
    }),
    body: z.string({
      required_error: 'Cannot be empty',
    }),
  }),
});

export const updatePost = z.object({
  params: z.object({
    id: z.string(),
  }),
  body: z.object({
    userId: z.number().int(),
    title: z.string(),
    body: z.string(),
  }),
});

export const deletePost = z.object({
  params: z.object({
    id: z.number().int(),
  }),
  body: z.object({
    userId: z.number().int(),
  }),
});
