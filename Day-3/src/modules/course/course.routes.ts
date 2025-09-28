import { Router, type Request, type Response } from "express";
import { courseController } from "./course.controller.js";

const router = Router();

router.get("/all-courses", (req: Request, res: Response) => {
  res.send("Hello TypeScript + Node + Express + Mongo!");
});

router.post("/create-course", courseController.createCourse);

export const CourseRoutes = router;
