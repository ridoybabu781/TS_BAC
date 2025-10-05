import { isUser } from "./../middlewares/User.js";
import { Router } from "express";
import { createUser, login, profile } from "../controllers/user.controller.js";
const router = Router();
router.post("/register", createUser);
router.post("/login", login);
router.post("/profile", isUser, profile);
export const UserRouter = router;
//# sourceMappingURL=user.routes.js.map