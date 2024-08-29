import { Router, Request } from "express";

const router = Router();
const prefix = "/suppliers";

router.get(`${prefix}`, (request, response) => {
  response.send("Get all suppliers");
});

router.get(`${prefix}/:id`, (request, response) => {
  response.send(`Get supplier with id: ${request.params.id}`);
});

router.post(`${prefix}`, (request, response) => {
  response.send("Created new supplier");
});

router.put(`${prefix}/:id`, (request, response) => {
  response.send(`Updated supplier with id: ${request.params.id}`);
});

router.delete(`${prefix}/:id`, (request, response) => {
  response.send(`Deleted supplier with id: ${request.params.id}`);
});

export default router;
