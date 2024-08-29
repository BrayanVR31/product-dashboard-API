import { Router, Request } from "express";

const router = Router();
const prefix = "/purchases";

router.get(`${prefix}`, (request, response) => {
  response.send("Get all purchases");
});

router.get(`${prefix}/:id`, (request, response) => {
  response.send(`Get purchase with id: ${request.params.id}`);
});

router.post(`${prefix}`, (request, response) => {
  response.send("Created new purchase");
});

router.put(`${prefix}/:id`, (request, response) => {
  response.send(`Updated purchase with id: ${request.params.id}`);
});

router.delete(`${prefix}/:id`, (request, response) => {
  response.send(`Deleted purchase with id: ${request.params.id}`);
});

export default router;
