import express, { Request, Response, NextFunction } from "express";
import { api } from "./routes";

const app = express();
// General settings
app.use(express.json());
interface ServerError extends Error {
  status?: number;
}

app.use(api);
app.use(
  (
    error: ServerError,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const errors = JSON.parse(error.message);
    response.status(error.status || 500).json({ errors });
  }
);

export default app;
