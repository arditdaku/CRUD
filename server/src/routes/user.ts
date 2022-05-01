import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const prisma = new PrismaClient();

const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send(error);
  }
});
usersRouter.get("/:id", async (req, res) => {
  const users = await prisma.user.findMany();

  return res.json({
    status: 400,
    body: {
      users,
    },
  });
});

usersRouter.post("/", async (req, res) => {
  const body = req.body;
  const user = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
    },
  });

  return res.json({
    status: 400,
    body: {
      user,
    },
  });
});

// usersRouter
//   .get('/customer', [auth, customer], getCustomerProfile)
//   .get('/service', [auth, service], getServiceProfile)
//   .put('/customer', [auth, customer], updateCustomerProfile)
//   .put('/service', [auth, service], updateServiceProfile)
//   .post('/address', auth, upsertAddress)

export default usersRouter;
