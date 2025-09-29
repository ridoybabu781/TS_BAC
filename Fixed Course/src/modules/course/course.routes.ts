import { Router, type Request, type Response } from "express";
import { courseController } from "./course.controller.js";
import { Mentor } from "../../middlewares/Mentor.js";
const router = Router();

router.get("/all-courses", (req: Request, res: Response) => {
  res.send("Hello TypeScript + Node + Express + Mongo!");
});

router.post("/create-course", Mentor, courseController.createCourse);
router.get("/", courseController.getCourses);
router.get("/:id", courseController.getSingleCourse);
router.put("/update/:id", courseController.updateCourse);
router.put("/delete/:id", courseController.deleteCourse);

export const CourseRoutes = router;
