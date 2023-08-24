import * as z from 'zod';

export const formSchema = z.object({
    prompt: z.string().nonempty().min(1,{
        message: 'Prompt is required for tunes'
    }),
});