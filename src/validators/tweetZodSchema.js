import { z } from 'zod';

export const tweetZodSchema = z.object({
    body: z.string().min(1).max(280) // Ensures body is a string with 1-280 characters
});
