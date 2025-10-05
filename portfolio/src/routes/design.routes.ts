import { Router } from "express";
import { isAdmin } from "../middlewares/Admin.js";
import { upload } from "../utils/multer.js";
import {
  createDesign,
  deleteDesign,
  getDesign,
  getDesigns,
} from "../controllers/design.controller.js";
const router = Router();

router.post("/createDesign", isAdmin, upload.single("image"), createDesign);
router.get("/", getDesigns);
router.get("/:id", getDesign);
router.delete("/:id", isAdmin, deleteDesign);

export const DesignRouter = router;
