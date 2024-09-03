import { Router } from "express";
import { admin } from "../controllers";
import { productSchema } from "../schemas";
import { validationMiddleware } from "../middlewares";

const router = Router();
const prefix = "/products";

router.get(`${prefix}`, admin.product.home);

router.get(`${prefix}/:id`, admin.product.edit);

router.post(
  `${prefix}`,
  validationMiddleware.validate(productSchema.Schema),
  admin.product.save
);

router.patch(
  `${prefix}/:id`,
  validationMiddleware.validate(productSchema.PartialSchema),
  admin.product.update
);

router.delete(`${prefix}/:id`, admin.product.destroy);

export default router;
