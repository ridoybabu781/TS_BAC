import { isUser } from './../middlewares/User.js';

import { Router } from "express";
import { createUser, login } from "../controllers/user.controller.js";

const router = Router()

router.post("/register", createUser)
router.post("/login", login)
router.post("/profile",isUser profile)

export const UserRouter = router