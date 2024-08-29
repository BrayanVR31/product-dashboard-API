import { Router } from "express";
import admin from "./admin";

const router = Router();

router.use("/api/v1", admin);

export default router;
