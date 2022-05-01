import express from "express";
import "dotenv/config";

import usersRouter from "./routes/user";

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
