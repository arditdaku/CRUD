import express from "express";
import "dotenv/config";
import cors from "cors";

import { user } from "./routes/index";

const app = express();

const port = process.env.PORT;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", user);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
