import mongoose from "mongoose";
const {
  MONGO_INITDB_ROOT_USERNAME: user,
  MONGO_INITDB_ROOT_PASSWORD: pass,
  MONGO_INITDB_PORT: port,
  MONGO_INITDB_URL: url,
} = process.env;
const urlConnection = `mongodb://${url}:${port}`;
const errors = {
  connection:
    "OOPS!, SOMETHING WAS WRONG WHILE IT WAS TRYING TO STABLISH DB CONNECTION",
};

// Test connection helper
export const connectDB = async () => {
  try {
    await mongoose.connect(urlConnection, {
      user,
      pass,
    });
    console.log("CONNECTION TO DATABASE WAS SUCCESSFUL");
  } catch (error) {
    throw new Error(errors.connection);
  }
};

// Create a new connection
export async function getConnection() {
  try {
    const connection = await mongoose
      .createConnection(urlConnection, {
        user,
        pass,
      })
      .asPromise();
    if (connection.readyState === 1) return connection;
    throw new Error(errors.connection);
  } catch (error) {}
}
