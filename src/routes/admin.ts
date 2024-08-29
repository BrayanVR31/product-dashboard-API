import { Router } from "express";
import category from "./category";
import product from "./product";
import purchase from "./purchase";
import sale from "./sale";
import supplier from "./supplier";
import user from "./user";

const router = Router();
const routes = [category, product, purchase, sale, supplier, user];

router.use("/admin", routes);

export default router;
