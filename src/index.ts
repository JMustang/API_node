import dotenv from "dotenv";
dotenv.config();

import { useRoutes } from "./routes/index";
import express, { Request, Response } from "express";
const PORT = process.env.PORT || 8891;

const app = express();

useRoutes(app);

app.get("/", (req: Request, res: Response) => {
  res.json({
    msg: "OK!!",
  });
});

app.listen(PORT, () => console.log("Servidor iniciado na porta " + PORT));
