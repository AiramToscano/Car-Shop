import { z } from 'zod';
import { IVehicle } from './IVehicle';

const ICarZodSchema = z.object({
  model: z.string().nonempty(),
  year: z.number().min(1900).max(2022),
  color: z.string().nonempty(),
  buyValue: z.number().int(),
  doorsQty: z.number().min(2).max(4).int(),
  seatsQty: z.number().min(2).max(7).int(),
});

export type ICar = IVehicle & z.infer<typeof ICarZodSchema>;

export { ICarZodSchema };
