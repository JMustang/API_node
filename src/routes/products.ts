import { Request, Response } from "express";
import { badRequest } from "../services/util";

const insertProduct = (req: Request, res: Response) => {
  {
    const product = req.body.product;
    if (!product) return badRequest(res, "Product not found");
  }
};
