import { Schema, SchemaTypes, model } from "mongoose";

// Types
interface PurchaseType {
  ticketImage?: string;
  products: string[];
  suppliers?: string[];
  totalPrice: number;
  purchaseDate?: Date;
  deletedAt?: Date;
}

// Schema
const schema = new Schema<PurchaseType>(
  {
    ticketImage: {
      type: SchemaTypes.String,
      required: false,
      default: null,
    },
    products: {
      type: [SchemaTypes.String],
      ref: "Product",
      required: true,
    },
    suppliers: {
      type: [SchemaTypes.String],
      required: false,
      ref: "Supplier",
    },
    totalPrice: {
      type: SchemaTypes.Number,
      required: true,
    },
    purchaseDate: {
      type: SchemaTypes.Date,
      required: false,
      default: null,
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
const Purchase = model<PurchaseType>("Purchase", schema);

export default Purchase;
