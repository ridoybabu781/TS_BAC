import { Router } from "express";
import { createCourse } from "./course.controller.js";
const router = Router();

router.post("/create-course", createCourse);

export const CourseRotuer = router;
