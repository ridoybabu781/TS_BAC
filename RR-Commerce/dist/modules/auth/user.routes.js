import { Router } from "express";
import { changePasswordValidator, forgetPasswordValidator, sendForgetPassCodeValidator, VCreateUser, VLogin, VSendVCode, VUpdate, VVerifyCode, } from "./user.validator.js";
import { changePassword, createUser, deleteUser, forgetPassword, login, profile, sendForgetPassCode, sendVerificationCode, update, verifyCode, } from "./user.controller.js";
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
router.put("/updatePassword", isUser, validation(changePasswordValidator), changePassword);
router.post("/sendForgetPassCode", validation(sendForgetPassCodeValidator), sendForgetPassCode);
router.post("/forgetPassword", validation(forgetPasswordValidator), forgetPassword);
export const UserRouter = router;
//# sourceMappingURL=user.routes.js.map