import express from "express";
import { api } from "./routes";

const app = express();

app.use(api);

export default app;
