import { Router } from "express";
import { login } from "./user.controller.js";

const router = Router();

router.post("/login", login);

export const userRouter = router;
