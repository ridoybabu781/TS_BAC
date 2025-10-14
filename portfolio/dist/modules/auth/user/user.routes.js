import { Router } from "express";
import { Validator } from "../../../middlewares/validator.js";
import { VLoginSchema, VUserSchema } from "./user.validator.js";
import { createUser, login } from "./user.controller.js";
import { profile } from "console";
import { isUser } from "../../../middlewares/User.js";
const router = Router();
router.post("/register", Validator(VUserSchema), createUser);
router.post("/login", Validator(VLoginSchema), login);
router.post("/profile", isUser, profile);
export const UserRouter = router;
//# sourceMappingURL=user.routes.js.map