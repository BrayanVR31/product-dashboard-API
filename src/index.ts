import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("<h1>Server is ready</h1>");
});

app.listen(4000, () => {
  console.log("Server is ready at http://localhost:4000");
});
