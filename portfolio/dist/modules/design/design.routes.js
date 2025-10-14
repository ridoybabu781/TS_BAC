import { Router } from "express";
import { isAdmin } from "../../middlewares/Admin.js";
import { VDesignSchema } from "./design.validator.js";
import { createDesign, deleteDesign, getDesign, getDesigns, } from "./design.controller.js";
import { upload } from "../../utils/multer.js";
import { Validator } from "../../middlewares/validator.js";
const router = Router();
router.post("/createDesign", isAdmin, Validator(VDesignSchema), upload.single("image"), createDesign);
router.get("/", getDesigns);
router.get("/:id", getDesign);
router.delete("/:id", isAdmin, deleteDesign);
export const DesignRouter = router;
//# sourceMappingURL=design.routes.js.map