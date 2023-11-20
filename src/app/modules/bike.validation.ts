import { z } from 'zod';

const EngineSchema = z.object({
  power: z.number(),
  torque: z.number(),
  cc: z.number(),
  milage: z.number(),
  break: z.string(),
  tyre: z.string(),
  valves: z.number().min(0).max(9, 'Valves should be between 0 and 9'),
});

const InformationSchema = z.object({
  name: z.string(),
  brand: z.string(),
  seller: z.string(),
  year: z.number().optional(),
  madeIn: z.string().optional(),
});

const BikeSchema = z.object({
  id: z.string(),
  info: InformationSchema,
  price: z.number(),
  types: z.enum(['bike', 'scooter', 'electric']), 
  engine: EngineSchema,
  isDeleted: z.boolean().default(false),
});


export default BikeSchema;