import { Router } from "express";
import { isAdmin } from "../middlewares/Admin.js";
import { upload } from "../utils/multer.js";
import { addCategory, deleteCategory, getCategories, } from "../controllers/category.controller.js";
import { Validator } from "../middlewares/validator.js";
import { VCategorySchema } from "../validators/category.validator.js";
const router = Router();
router.post("/addCategory", isAdmin, Validator(VCategorySchema), upload.single("icon"), addCategory);
router.get("/", getCategories);
router.delete("/delete/:id", isAdmin, deleteCategory);
export const CategoryRouter = router;
//# sourceMappingURL=category.routes.js.map