import { Schema, SchemaTypes, model } from "mongoose";

const schema = new Schema(
  {
    name: SchemaTypes.String,
  },
  { versionKey: false, timestamps: true }
);

const Category = model("Category", schema);

export default Category;
