import { Router } from "express";
import { addCategory, deleteCategory, getCategories, } from "./category.controller.js";
const router = Router();
router.post("/addCategory", addCategory);
router.get("/", getCategories);
router.delete("/delete/:id", deleteCategory);
export const CategoryRouter = router;
//# sourceMappingURL=category.routes.js.map