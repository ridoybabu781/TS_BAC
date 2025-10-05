import { Router } from "express";
import { createAdmin } from "../controllers/admin.controller.js";
import { Validator } from "../middlewares/validator.js";
import { VUserSchema } from "../validators/user.validator.js";
const router = Router();
router.post("/register", Validator(VUserSchema), createAdmin);
export const AdminRouter = router;
//# sourceMappingURL=admin.routes.js.map