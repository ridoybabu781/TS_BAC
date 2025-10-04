import { Router } from "express";
import {
  blockUser,
  createAdmin,
  deleteUser,
  unBlockUser,
  unDeleteUser,
} from "./admin.controller.js";
import { isAdmin } from "../../../middlewares/Admin.js";
const router = Router();

router.post("/register", createAdmin);
router.put("/block", isAdmin, blockUser);
router.put("/unblock", isAdmin, unBlockUser);
router.put("/delete", isAdmin, deleteUser);
router.put("/undelete", isAdmin, unDeleteUser);

export const vendorRouter = router;
