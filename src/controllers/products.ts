import { Request, Response } from "express";
import { badRequest, internalServerError } from "../services/util";
import { Product, productModel } from "../models/products";

const insertProduct = (req: Request, res: Response) => {
  {
    const product = req.body.product;
    if (!product) return badRequest(res, "Product not found");

    if (!product.name) return badRequest(res, "Product name");

    if (!(parseFloat(product.price) > 0))
      return badRequest(res, "Product price");
  }

  const product = req.body as Product;
  return productModel
    .insertProduct(product)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => internalServerError(res, err));
};

export const productController = {
  insertProduct,
};
