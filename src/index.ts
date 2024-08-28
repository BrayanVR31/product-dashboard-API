import express from "express";
import "dotenv/config";

const app = express();
const { APP_PORT: PORT = 3000 } = process.env;

app.get("/", (request, response) => {
  response.send("<h1>Server is ready with docker</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is ready at http://localhost:${PORT}`);
});
