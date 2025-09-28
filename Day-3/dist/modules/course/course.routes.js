import { Router } from "express";
import { courseController } from "./course.controller.js";
const router = Router();
router.get("/all-courses", (req, res) => {
    res.send("Hello TypeScript + Node + Express + Mongo!");
});
router.post("/create-course", courseController.createCourse);
export const CourseRoutes = router;
//# sourceMappingURL=course.routes.js.map