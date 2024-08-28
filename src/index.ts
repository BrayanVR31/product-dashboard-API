import "dotenv/config";
import { database } from "./config";
import app from "./app";
const { APP_PORT: PORT = 3000 } = process.env;

const main = async () => {
  try {
    await database.connectDB();
  } catch (error) {
    console.log(error);
  } finally {
    app.listen(PORT, () => {
      console.log(`Server is ready at http://localhost:${PORT}`);
    });
  }
};

main();
