import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  active: z.boolean(),
  session: z.boolean(),
});

export type TUserSchema = z.infer<typeof userSchema>;

export const createUserInput = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

export type TCreateUserInput = z.infer<typeof createUserInput>;
