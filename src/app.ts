import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("<h1>Server is ready with docker</h1>");
});

export default app;
