import { Router } from "express";
import { isAdmin } from "../middlewares/Admin.js";
import { upload } from "../utils/multer.js";
import { createDesign, deleteDesign, getDesign, getDesigns, } from "../controllers/design.controller.js";
import { Validator } from "../middlewares/validator.js";
import { VDesignSchema } from "../validators/design.validator.js";
const router = Router();
router.post("/createDesign", isAdmin, Validator(VDesignSchema), upload.single("image"), createDesign);
router.get("/", getDesigns);
router.get("/:id", getDesign);
router.delete("/:id", isAdmin, deleteDesign);
export const DesignRouter = router;
//# sourceMappingURL=design.routes.js.map