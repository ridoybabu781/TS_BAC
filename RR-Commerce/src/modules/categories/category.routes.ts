import { Router } from "express";
import {
  addCategory,
  deleteCategory,
  getCategories,
} from "./category.controller.js";
import { isAdmin } from "../../middlewares/Admin.js";
import { upload } from "../../utils/multer.js";

const router = Router();

router.post("/addCategory", isAdmin, upload.single("icon"), addCategory);
router.get("/", getCategories);
router.delete("/delete/:id", isAdmin, deleteCategory);

export const CategoryRouter = router;
