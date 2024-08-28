import mongoose from "mongoose";
const {
  MONGO_INITDB_ROOT_USERNAME: user,
  MONGO_INITDB_ROOT_PASSWORD: pass,
  MONGO_INITDB_PORT: port,
  MONGO_INITDB_URL: url,
} = process.env;
const urlConnection = `mongodb://${url}:${port}`;

// Test connection helper
export const connectDB = async () => {
  try {
    await mongoose.connect(urlConnection, {
      user,
      pass,
    });
    console.log("CONNECTION TO DATABASE WAS SUCCESSFUL");
  } catch (error) {
    throw new Error(
      "OOPS!, SOMETHING WAS WRONG WHILE IT WAS TRYING TO STABLISH DB CONNECTION"
    );
  }
};
