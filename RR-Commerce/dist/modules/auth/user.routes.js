import { Router } from "express";
import { VCreateUser, VLogin, VSendVCode, VUpdate, VVerifyCode, } from "./user.validator.js";
import { createUser, deleteUser, login, profile, sendVerificationCode, update, verifyCode, } from "./user.controller.js";
import { isUser } from "../../middlewares/User.js";
import { validation } from "../../middlewares/Validator.js";
const router = Router();
router.post("/sendcode", validation(VSendVCode), sendVerificationCode);
router.post("/verifySignupCode", validation(VVerifyCode), verifyCode);
router.post("/register", validation(VCreateUser), createUser);
router.post("/login", validation(VLogin), login);
router.put("/update", isUser, validation(VUpdate), update);
router.get("/profile", isUser, profile);
router.delete("/delete", isUser, deleteUser);
export const UserRouter = router;
//# sourceMappingURL=user.routes.js.map