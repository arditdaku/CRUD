import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = Router();

router.get("/", async (req, res) => {
  const users = await prisma.user.findMany();

  return res.json({
    status: 400,
    body: {
      users,
    },
  });
});
router.get("/:id", async (req, res) => {
  const users = await prisma.user.findMany();

  return res.json({
    status: 400,
    body: {
      users,
    },
  });
});

router.post("/", async (req, res) => {
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

// router
//   .get('/customer', [auth, customer], getCustomerProfile)
//   .get('/service', [auth, service], getServiceProfile)
//   .put('/customer', [auth, customer], updateCustomerProfile)
//   .put('/service', [auth, service], updateServiceProfile)
//   .post('/address', auth, upsertAddress)

export default router;
