import { Router } from "express";

import { createAdmin } from "./admin.controller.js";
import { Validator } from "../../../middlewares/validator.js";
import { VUserSchema } from "../user/user.validator.js";

const router = Router();

router.post("/register", Validator(VUserSchema), createAdmin);

export const AdminRouter = router;
