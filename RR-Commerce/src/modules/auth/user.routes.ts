import { Router } from "express";
import { validation } from "../../middlewares/Validator.js";
import { VCreateUser, VLogin, VUpdate } from "./user.validator.js";
import {
  createUser,
  deleteUser,
  login,
  profile,
  update,
} from "./user.controller.js";
import { isUser } from "../../middlewares/User.js";
import { vendorRouter } from "./vendor/vendor.routes.js";

const router = Router();

router.post("/register", validation(VCreateUser), createUser);
router.post("/login", validation(VLogin), login);
router.put("/update", isUser, validation(VUpdate), update);
router.get("/profile", isUser, profile);
router.delete("/delete", isUser, deleteUser);

// other routes
router.use("/vendor", vendorRouter);

export const UserRouter = router;
