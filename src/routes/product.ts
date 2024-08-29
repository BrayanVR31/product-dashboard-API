import { Router, Request } from "express";

const router = Router();
const prefix = "/products";

router.get(`${prefix}`, (request, response) => {
  response.send("Get all products");
});

router.get(`${prefix}/:id`, (request, response) => {
  response.send(`Get product with id: ${request.params.id}`);
});

router.post(`${prefix}`, (request, response) => {
  response.send("Created new product");
});

router.put(`${prefix}/:id`, (request, response) => {
  response.send(`Updated product with id: ${request.params.id}`);
});

router.delete(`${prefix}/:id`, (request, response) => {
  response.send(`Deleted product with id: ${request.params.id}`);
});

export default router;
