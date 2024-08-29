import { Router, Request } from "express";

const router = Router();
const prefix = "/users";

router.get(`${prefix}`, (request, response) => {
  response.send("Get all users");
});

router.get(`${prefix}/:id`, (request, response) => {
  response.send(`Get user with id: ${request.params.id}`);
});

router.post(`${prefix}`, (request, response) => {
  response.send("Created new user");
});

router.put(`${prefix}/:id`, (request, response) => {
  response.send(`Updated user with id: ${request.params.id}`);
});

router.delete(`${prefix}/:id`, (request, response) => {
  response.send(`Deleted user with id: ${request.params.id}`);
});

export default router;
