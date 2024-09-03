import mongoose, { Schema, SchemaTypes } from "mongoose";

// Types
export class ClassName {
  name: string;
  description: string;
  type: string;
  price: number;
  images?: string[];
  categories?: string[];
  suppliers?: string[];
  stock?: number;
  status?: boolean;
  deletedAt?: Date;
}

// Schema
const schema = new Schema<ClassName>(
  {
    name: {
      type: SchemaTypes.String,
      required: true,
    },
    description: {
      type: SchemaTypes.String,
      required: true,
    },
    type: {
      type: SchemaTypes.String,
      required: true,
    },
    price: {
      type: SchemaTypes.Number,
      required: true,
    },
    images: {
      type: [SchemaTypes.String],
      required: false,
      default: null,
    },
    categories: {
      type: [SchemaTypes.String],
      required: false,
      default: null,
      ref: "Category",
    },
    suppliers: {
      type: [SchemaTypes.String],
      required: false,
      default: null,
      ref: "Supplier",
    },
    stock: {
      type: SchemaTypes.Number,
      required: false,
      default: 0,
    },
    status: {
      type: SchemaTypes.Boolean,
      required: false,
      default: false,
    },
    deletedAt: {
      type: SchemaTypes.Date,
      required: false,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

// Model
export const Model: mongoose.Model<ClassName> = mongoose.model(
  "Product",
  schema
);
