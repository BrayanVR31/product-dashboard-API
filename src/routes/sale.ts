import { Router, Request } from "express";

const router = Router();
const prefix = "/sales";

router.get(`${prefix}`, (request, response) => {
  response.send("Get all sales");
});

router.get(`${prefix}/:id`, (request, response) => {
  response.send(`Get sale with id: ${request.params.id}`);
});

router.post(`${prefix}`, (request, response) => {
  response.send("Created new sale");
});

router.put(`${prefix}/:id`, (request, response) => {
  response.send(`Updated sale with id: ${request.params.id}`);
});

router.delete(`${prefix}/:id`, (request, response) => {
  response.send(`Deleted sale with id: ${request.params.id}`);
});

export default router;
