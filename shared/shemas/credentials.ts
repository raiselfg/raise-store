import { z } from 'zod';

export const credentialsSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters long')
    .max(50, 'Email must not exceed 50 characters'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(32, 'Password must not exceed 32 characters'),
});

export type credentialsType = z.infer<typeof credentialsSchema>;
