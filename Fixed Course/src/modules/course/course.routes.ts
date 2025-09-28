import { Router, type Request, type Response } from "express";
import { courseController } from "./courseController.js";
const router = Router();

router.get("/all-courses", (req: Request, res: Response) => {
  res.send("Hello TypeScript + Node + Express + Mongo!");
});

router.post("/create-course", courseController.createCourse);
router.get("/:id", courseController.getSingleCourse);
router.get("/", courseController.getCourses);

export const CourseRoutes = router;
