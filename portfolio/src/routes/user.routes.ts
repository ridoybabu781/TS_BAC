import { isUser } from "./../middlewares/User.js";

import { Router } from "express";
import { createUser, login, profile } from "../controllers/user.controller.js";
import { Validator } from "../middlewares/validator.js";
import { VLoginSchema, VUserSchema } from "../validators/user.validator.js";

const router = Router();

router.post("/register", Validator(VUserSchema), createUser);
router.post("/login", Validator(VLoginSchema), login);
router.post("/profile", isUser, profile);

export const UserRouter = router;
