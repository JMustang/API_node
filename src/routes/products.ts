import { productController } from "../controllers/products";
import { Router } from "express";

const productRouter = Router();
productRouter.post("/", productController.insertProduct);

export { productRouter };
