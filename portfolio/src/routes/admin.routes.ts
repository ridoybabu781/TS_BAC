import { Router } from "express";

import { createAdmin } from "../controllers/admin.controller.js";

const router = Router();

router.post("/register", createAdmin);

export const AdminRouter = router;
