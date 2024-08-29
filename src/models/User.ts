import { Schema, SchemaTypes, model } from "mongoose";

// Types
interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image?: string;
  deletedAt?: Date;
}

// Schema
const schema = new Schema<UserType>(
  {
    firstName: {
      type: SchemaTypes.String,
      required: true,
    },
    lastName: {
      type: SchemaTypes.String,
      required: true,
    },
    email: {
      type: SchemaTypes.String,
      required: true,
    },
    password: {
      type: SchemaTypes.String,
      required: true,
    },
    image: {
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
const User = model<UserType>("User", schema);

export default User;
