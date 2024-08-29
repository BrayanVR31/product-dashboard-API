import { Router, Request } from "express";

const router = Router();
const prefix = "/categories";

router.get(`${prefix}`, (request, response) => {
  response.send("Get all categories");
});

router.get(`${prefix}/:id`, (request, response) => {
  response.send(`Get category with id: ${request.params.id}`);
});

router.post(`${prefix}`, (request, response) => {
  response.send("Created new category");
});

router.put(`${prefix}/:id`, (request, response) => {
  response.send(`Updated category with id: ${request.params.id}`);
});

router.delete(`${prefix}/:id`, (request, response) => {
  response.send(`Deleted category with id: ${request.params.id}`);
});

export default router;
