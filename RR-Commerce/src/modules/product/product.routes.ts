import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "./product.controller.js";
const router = Router();

router.post("/addProduct", addProduct);
router.get("/:id", getProduct);
router.get("/", getProducts);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

export const ProductRouter = router;
