import { Schema, SchemaTypes, model } from "mongoose";

// Types
interface SaleType {
  name: string;
  products: string[];
  quantity: number;
  totalPrice: number;
  deletedAt?: Date;
}

// Schema
const schema = new Schema<SaleType>(
  {
    name: {
      type: SchemaTypes.String,
      required: true,
    },
    products: {
      type: [SchemaTypes.String],
      required: true,
    },
    quantity: {
      type: SchemaTypes.Number,
      required: true,
    },
    totalPrice: {
      type: SchemaTypes.Number,
      required: true,
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
const Sale = model<SaleType>("Sale", schema);

export default Sale;
