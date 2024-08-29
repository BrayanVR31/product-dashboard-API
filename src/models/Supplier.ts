import { Schema, SchemaTypes, model } from "mongoose";

// Types
interface SupplierType {
  name: string;
  address?: string;
  phoneNumber?: number;
  email?: string;
  deletedAt?: Date;
}

// Schema
const schema = new Schema<SupplierType>(
  {
    name: {
      type: SchemaTypes.String,
      required: true,
    },
    address: {
      type: SchemaTypes.String,
      required: false,
      default: null,
    },
    phoneNumber: {
      type: SchemaTypes.Number,
      required: false,
      default: null,
    },
    email: {
      type: SchemaTypes.String,
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
const Supplier = model<SupplierType>("Supplier", schema);

export default Supplier;
