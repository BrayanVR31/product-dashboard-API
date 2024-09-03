import { z } from "zod";
import { database } from "../helpers";

function transformEmptyToNull<T>(value: T | T[] | null | undefined) {
  if (!value) return null;
  if (value instanceof Array) return value.length === 0 ? null : value;
}

// Schema
export const Schema = z.object({
  name: z.string().min(1),
  description: z.string().max(400),
  type: z.string().min(1),
  price: z.number(),
  stock: z.number().optional().default(0),
  status: z.boolean().optional().default(false),
  images: z.string().array().nullable(),
  categories: z
    .union([z.string().nullable(), z.array(z.string()).nullable()])
    .refine(database.matchObjectId, {
      message: "The array of categories hasn't an ObjectId format",
    })
    .optional()
    .transform((value) => transformEmptyToNull(value)),
  suppliers: z
    .union([z.string().nullable(), z.array(z.string()).nullable()])
    .refine(database.matchObjectId, {
      message: "The array of suppliers hasn't an ObjectId format",
    })
    /*.refine(database.existReferencesFromDoc("suppliers"), {
      message: "Some items don't match with array of suppliers on references",
    })*/
    .optional()
    .transform((value) => transformEmptyToNull(value)),
});

// Partial schema
export const PartialSchema = Schema.partial();

// Type
export type Type = z.infer<typeof Schema>;
