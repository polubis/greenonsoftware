import { z } from 'zod';

export const dietPersonalizationSchema = z.object({
  goal: z.enum(['lose_weight', 'maintain_weight', 'gain_muscle'], {
    required_error: 'Goal is required',
  }),
  sex: z.enum(['male', 'female'], {
    required_error: 'Sex is required',
  }),
  age: z.string().min(1, 'Age is required'),
  height: z.string().min(1, 'Height is required'),
  weight: z.string().min(1, 'Weight is required'),
});
