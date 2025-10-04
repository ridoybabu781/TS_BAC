import { Router } from "express";
import { approveVendor, blockUser, createAdmin, deleteUser, rejectVendor, unBlockUser, unDeleteUser, } from "./admin.controller.js";
import { isAdmin } from "../../../middlewares/Admin.js";
const router = Router();
router.post("/register", createAdmin);
router.put("/approveVendor/:id", isAdmin, approveVendor);
router.put("/rejectVendor", isAdmin, rejectVendor);
router.put("/block/:id", isAdmin, blockUser);
router.put("/unblock/:id", isAdmin, unBlockUser);
router.put("/delete/:id", isAdmin, deleteUser);
router.put("/undelete/:id", isAdmin, unDeleteUser);
export const adminRouter = router;
//# sourceMappingURL=admin.routes.js.map