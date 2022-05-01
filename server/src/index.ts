import express from "express";
import "dotenv/config";

import { users } from "./routes/index";

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
