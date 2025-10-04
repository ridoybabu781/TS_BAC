import { Router } from "express";
import { blockUser, createVendor } from "./vendor.controller.js";
import { isVendor } from "../../../middlewares/Vendor.js";
const router = Router();
router.post("/register", createVendor);
router.post("/block/:id", isVendor, blockUser);
export const vendorRouter = router;
//# sourceMappingURL=vendor.routes.js.map