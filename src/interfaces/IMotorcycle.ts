import { z } from 'zod';
import { IVehicle } from './IVehicle';

const MotorCycleZodSchema = z.object({
  status: z.boolean().optional(),
  model: z.string().nonempty(),
  year: z.number().min(1900).max(2022),
  color: z.string().nonempty(),
  buyValue: z.number().int(),
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().max(2500).min(1),
});

export type IMotorcycle = IVehicle & z.infer<typeof MotorCycleZodSchema>;

export { MotorCycleZodSchema };
